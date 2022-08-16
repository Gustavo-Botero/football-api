const CompetitionTeamModel = use('App/Models/CompetitionTeam');

class CompetitionTeamRepository {

    /**
     * Function to create the relationship between the competition
     * and the team
     * @param {Integer} competitionId
     * @param {Integer} teamId
     * @returns object
     */
    async create(competitionId, teamId) {
        const competitionTeam = await new CompetitionTeamModel();
        competitionTeam.fill({
            competition_id: competitionId,
            team_id: teamId
        });
        await competitionTeam.save();

        return competitionTeam;
    }

    /**
     * Function to get a record from the competitionteam table
     * with competition id and team id
     * @param {Integer} competitionId
     * @param {Integer} teamId
     * @returns object
     */
    async getByCompetitionAndTeam(competitionId, teamId) {

        return await CompetitionTeamModel.findBy({
            competition_id: competitionId,
            team_id: teamId
        });
    }

}

module.exports = new CompetitionTeamRepository()