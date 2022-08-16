const PlayerRepository = use('App/Repositories/PlayerRepository');

class GetDataIndexUseCase {

    /**
     * Function to consult the players of a league and team
     * @param {String} leagueCode
     * @param {String} team
     * @returns object
     */
    async handle(leagueCode, team = null) {
        let status = 200;
        let query;

        if(team) {
            let nameTeam = team.replaceAll('-', ' ');
            query = await PlayerRepository.getDataByLeagueCodeAndTeam(leagueCode, nameTeam);

            if(query == '') {
                query = `El código de liga: ${leagueCode} o el nombre del equipo ${nameTeam} no existe`;
            }
        } else {
            query = await PlayerRepository.getDataByLeagueCode(leagueCode);
        }

        if (query == '') {
            query = `El código de liga: ${leagueCode} no existe`;
            status = 404
        }

        return {
            'data': query,
            'status': status
        };
    }

}

module.exports = new GetDataIndexUseCase()