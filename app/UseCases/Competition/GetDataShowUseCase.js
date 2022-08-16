const CompetitionModel = use('App/Models/Competition');

class GetDataShowUseCase {

    /**
     * Function to get a competition by name
     * @param {String} competition
     * @returns object
     */
    async handle(competition) {
        let status = 200;
        const nameCompetition = competition.replaceAll('-', ' ');

        let query = await CompetitionModel.findBy('name', nameCompetition);

        if (query === null) {
            query = `El nombre de la competencia no existe: ${competition}`;
            status = 404
        }

        return {
            'data': query,
            'status': status
        };
    }
}

module.exports = new GetDataShowUseCase()