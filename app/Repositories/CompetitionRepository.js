const CompetitionModel = use('App/Models/Competition');

class CompetitionRepository {

    /**
     * Function to create a competition
     * @param {object} request
     * @returns object
     */
    async create(request) {
        let competition = await new CompetitionModel();
        competition.fill({
            api_id: request.id,
            name: request.name,
            code: request.code,
            areaName: request.area.name
        });

        await competition.save();

        return competition;
    }

    /**
     * Function to get record by API ID
     * @param {Integer} apiId
     * @returns object
     */
    async getByApiId(apiId) {

        return await CompetitionModel.findBy('api_id', apiId);
    }
}

module.exports = new CompetitionRepository()