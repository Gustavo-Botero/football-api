const PlayerRepository = use("App/Repositories/PlayerRepository");
const TeamRepository = use("App/Repositories/TeamRepository");
const CreatePlayerHistoryUseCase = use("App/UseCases/PlayerHistory/CreatePlayerHistoryUseCase");

class ChangePlayerUseCase {
  /**
   * Function to change a team player
   * @param {Integer} idPlayer
   * @param {Integer} idTeam
   * @returns object
   */
  async handle(idPlayer, idTeam) {
    const player = await PlayerRepository.getById(idPlayer);
    const team = await TeamRepository.getById(idTeam);
    let message = 'Error, no se pudo realizar el cambio de equipo, por favor vuelva a interntar';
    let status = 404;

    if (player && team) {
      status = 200;

      if (player.team_id == team.id) {
        message = 'El jugador ya pertenece a ese equipo';
      } else {
        let leaving_team = player.team_id;
        await PlayerRepository.changeTeam(player, team.id);
        await CreatePlayerHistoryUseCase.handle(player.id, leaving_team, team.id);
        message = 'Se realizó el cambio exitosamente';
      }
    }

    return {
      message: message,
      status: status,
    };
  }
}

module.exports = new ChangePlayerUseCase();
