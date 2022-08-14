const CompetitionTeamRepository = use('App/Repositories/CompetitionTeamRepository');

class CreateCompetitionTeamUseCase {

    /**
     * Function to create the relationship between the competition
     * and the team
     * @param {Integer} competitionId
     * @param {Integer} teamId
     * @returns object
     */
    async handle(competitionId, teamId) {

        let competitionTeam = await CompetitionTeamRepository
            .getByCompetitionAndTeam(competitionId, teamId);

        if (!competitionTeam) {
            competitionTeam = await CompetitionTeamRepository.
                create(competitionId, teamId);
        }

        return competitionTeam;
    }
}

module.exports = new CreateCompetitionTeamUseCase()