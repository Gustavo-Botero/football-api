const PlayerHistoryRepository = use('App/Repositories/PlayerHistoryRepository');

class CreatePlayerHistoryUseCase {

  /**
   * Function to create a record and keep the history of the player
   * @param {Integer} idPlayer
   * @param {Integer} idLeavingTeam
   * @param {Integer} idEntryTeam
   * @returns object
   */
  async handle(idPlayer, idLeavingTeam, idEntryTeam) {
    return await PlayerHistoryRepository.create(idPlayer, idLeavingTeam, idEntryTeam);
  }

}

module.exports = new CreatePlayerHistoryUseCase()
