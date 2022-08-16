const GetCompetitionApiUseCase = use('App/UseCases/FootballApi/GetCompetitionApiUseCase');
const CreateCompetitionUseCase = use('App/UseCases/Competition/CreateCompetitionUseCase');
const GetTeamsApiUseCase = use('App/UseCases/FootballApi/GetTeamsApiUseCase');

class GetDataIndexUseCase {

    /**
     * Function to consume the api
     * @param {String} leagueCode
     */
    async handle(leagueCode) {
        let competition;
        const league = await GetCompetitionApiUseCase.handle(leagueCode);

        if (league.data) {
            competition = await CreateCompetitionUseCase.handle(league.data.competition);

            if (league.data.teams) {
                await GetTeamsApiUseCase.handle(league.data.teams, competition.id);
            }
        }

        return league;
    }
}

module.exports = new GetDataIndexUseCase()