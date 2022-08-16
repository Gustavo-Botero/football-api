const FootballApiService = use('App/Services/FootballApiService');

class GetCompetitionApiUseCase {

    /**
     * Function to import the leagues
     * @param {String} leagueCode
     * @returns object
     */
    async handle(leagueCode) {
        const url = `https://api.football-data.org/v2/competitions/${leagueCode.toUpperCase()}/teams`;

        return await FootballApiService.consumeApi(url);
    }
}

module.exports = new GetCompetitionApiUseCase()