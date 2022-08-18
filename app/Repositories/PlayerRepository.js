const PlayerModel = use('App/Models/Player');
const Database = use('Database')
class PlayerRepository {
  /**
   * Function to create a player
   * @param {Object} players
   * @param {Integer} teamId
   * @returns object
   */
  async create(players, teamId) {
    const player = new PlayerModel();
    player.fill({
      api_id: players.id,
      team_id: teamId,
      name: players.name,
      position: players.position,
      dateOfBirth: players.dateOfBirth,
      countryOfBirth: players.countryOfBirth,
      nationality: players.nationality
    });

    await player.save();

    return player;
  }

  /**
   * Function to get players with api id and team id
   * @param {Integer} playerApiId
   * @param {Integer} teamId
   * @returns object
   */
  async getByPlayerAndTeam(playerApiId, teamId) {
    return await PlayerModel.findBy({
      api_id: playerApiId,
      team_id: teamId
    });
  }

  /**
   * Function to consult the players of a league
   * @param {String} leagueCode
   * @returns object
   */
  async getDataByLeagueCode(leagueCode) {
    return await Database.table("competitions")
      .join('competition_teams', 'competitions.id', 'competition_teams.competition_id')
      .join('teams', 'competition_teams.team_id', 'teams.id')
      .join('players', 'teams.id', 'players.team_id')
      .where('competitions.code', leagueCode)
      .select('players.*', 'teams.name');
  }

  /**
   * Function to consult the players of a league and team
   * @param {String} leagueCode
   * @param {String} team
   * @returns object
   */
  async getDataByLeagueCodeAndTeam(leagueCode, team) {
    return await Database.table('competitions')
      .join('competition_teams', 'competitions.id','competition_teams.competition_id')
      .join('teams', 'competition_teams.team_id', 'teams.id')
      .join('players', 'teams.id', 'players.team_id')
      .where({
        'competitions.code': leagueCode,
        'teams.name': team,
      })
      .select('players.*', 'teams.name as teamName');
  }

  /**
   * Function to get record by ID
   * @param {Integer} idPlayer
   * @returns object
   */
  async getById(idPlayer) {

    return await PlayerModel.findBy("id", idPlayer);
  }

  /**
   * Function to change a team player
   * @param {PlayerModel} player
   * @param {Integer} idTeam
   * @returns object
   */
  async changeTeam(player, idTeam) {
    player.team_id = idTeam;

    player.save();

    return player;
  }
}

module.exports = new PlayerRepository()
