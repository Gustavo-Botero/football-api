const FootballApiService = use('App/Services/FootballApiService');
const CreateTeamUseCase = use('App/UseCases/Team/CreateTeamUseCase');

class GetTeamsApiUseCase {

    /**
     * Function to import team and members
     * @param {Object} data
     * @param {Integer} competitionId
     */
    async handle(data, competitionId) {
        const waitSeconds = seconds => {
            return new Promise (resolve => {
              setTimeout(() => {
                resolve (true);
              }, seconds);
            });
          }

          for (const team of data) {

            if (team != null) {
              await waitSeconds(6100);
              const url = `https://api.football-data.org/v2/teams/${team.id}`;
              const resTeam = await FootballApiService.consumeApi(url);
              await CreateTeamUseCase.handle(resTeam.data, competitionId);
            }
          }
    }
}

module.exports = new GetTeamsApiUseCase()