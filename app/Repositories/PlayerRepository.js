const PlayerModel = use('App/Models/Player');

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
}

module.exports = new PlayerRepository()
