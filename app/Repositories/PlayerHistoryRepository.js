const PlayerHistoryModel = use('App/Models/PlayerHistory');

class PlayerHistoryRepository {

  /**
   * Function to create a record and keep the history of the player
   * @param {Integer} idPlayer
   * @param {Integer} idLeavingTeam
   * @param {Integer} idEntryTeam
   * @returns object
   */
  async create(idPlayer, idLeavingTeam, idEntryTeam) {
    let playerHistory = new PlayerHistoryModel();

    playerHistory.fill({
      player_id: idPlayer,
      leaving_team: idLeavingTeam,
      entry_team: idEntryTeam
    });

    playerHistory.save();

    return playerHistory;
  }
}

module.exports = new PlayerHistoryRepository()
