const CompetitionRepository = use('App/Repositories/CompetitionRepository');
class CreateCompetitionUseCase {

    /**
     * Function to create a competition
     * @param {object} request
     * @returns object
     */
    async handle (request) {
        let competition = await CompetitionRepository.getByApiId(request.id);

        if (!competition) {
            competition = await CompetitionRepository.create(request);
        }

        return competition;
    }
}

module.exports = new CreateCompetitionUseCase()