const PlayerRepository = use('App/Repositories/PlayerRepository');

class CreatePlayerUseCase {

  /**
   * Function to create a player
   * @param {Object} squad
   * @param {Integer} teamId
   * @returns object
   */
  async handle(squad, teamId) {
    let player;
    for (const players of squad) {

      player = await PlayerRepository.getByPlayerAndTeam(players.id, teamId);

      if (!player) {
        player = await PlayerRepository.create(players, teamId);
      }
    }

    return player;
  }

}

module.exports = new CreatePlayerUseCase()
