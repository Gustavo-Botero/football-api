const TeamModel = use('App/Models/Team');

class TeamRepository {

    /**
     * Function to create a team
     * @param {Objec} request
     * @returns object
     */
    async create( request ) {
        const team = new TeamModel();
        team.fill({
            api_id: request.id,
            name: request.name,
            tla: request.tla,
            shortName: request.shortName,
            areaName: request.area.name,
            email: request.email
        });

        await team.save();

        return team;
    }

    /**
     * Function to get record by API ID
     * @param {Integer} apiId
     * @returns object
     */
    async getByApiId(apiId) {

        return await TeamModel.findBy('api_id', apiId);
    }
}

module.exports = new TeamRepository()