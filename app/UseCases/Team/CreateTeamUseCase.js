const TeamRepository = use('App/Repositories/TeamRepository');
const CreateCompetitionTeamUseCase = use('App/UseCases/CompetitionTeam/CreateCompetitionTeamUseCase');

class CreateTeamUseCase {

    /**
     * Function to create a team
     * @param {Object} request
     * @param {Integer} competitionId
     * @returns object
     */
    async handle(request, competitionId) {

        let team = await TeamRepository.getByApiId(request.id);

        if (!team) {
            team = await TeamRepository.create(request);
        }

        await CreateCompetitionTeamUseCase.handle(competitionId, team.id);

        return team;
    }
}

module.exports = new CreateTeamUseCase()