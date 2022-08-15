const TeamRepository = use('App/Repositories/TeamRepository');
const CreateCompetitionTeamUseCase = use('App/UseCases/CompetitionTeam/CreateCompetitionTeamUseCase');
const CreatePlayerUseCase = use('App/UseCases/Player/CreatePlayerUseCase');

class CreateTeamUseCase {

    /**
     * Function to create a team
     * @param {Object} teams
     * @param {Integer} competitionId
     * @returns object
     */
    async handle(teams, competitionId) {

        let team = await TeamRepository.getByApiId(teams.id);

        if (!team) {
            team = await TeamRepository.create(teams);
        }

        /**
         * Function to create the relationship between the competition
         * and the team
         */
        await CreateCompetitionTeamUseCase.handle(competitionId, team.id);

        if (teams.squad) {
          await CreatePlayerUseCase.handle(teams.squad, team.id);
        }

        return team;
    }
}

module.exports = new CreateTeamUseCase()
