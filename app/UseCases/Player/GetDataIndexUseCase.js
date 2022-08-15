const PlayerRepository = use('App/Repositories/PlayerRepository');

class GetDataIndexUseCase {

    /**
     * Function to consult the players of a league
     * @param {String} leagueCode
     * @returns
     */
    async handle(leagueCode) {
        let status = 200;

        let query = await PlayerRepository.getDataByLeagueCode(leagueCode);

        if (query == '') {
            query = 'El código de liga no existe';
            status = 404
        }

        return {
            'data': query,
            'status': status
        };
    }

}

module.exports = new GetDataIndexUseCase()