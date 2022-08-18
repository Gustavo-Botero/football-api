const PlayerRepository = use('App/Repositories/PlayerRepository');
const TeamRepository = use('App/Repositories/TeamRepository');

class ChangePlayerUseCase {

    async handle(idPlayer, idTeam) {
        const player = await PlayerRepository.getById(idPlayer);
        const team = await TeamRepository.getById(idTeam);
        let message = `Error, no se pudo realizar el cambio de equipo, por favor vuelva a interntar`;
        let status = 404;

        if (player && team) {
            await PlayerRepository.changeTeam(player, team.id);

            message = `Se realizó el cambio exitosamente`
            status = 200;
        }

        return {
            message: message,
            status: status
        };

    }
}

module.exports = new ChangePlayerUseCase()