'use strict'
const CompetitionModel = use('App/Models/Competition');
const GetDataShowUseCase = use('App/UseCases/Competition/GetDataShowUseCase');

class CompetitionController {

    /**
     * Function to get all competition
     * @param {*} param0
     * @returns object
     */
    async index({ response }) {
        const query = await CompetitionModel.all();

        return response.status(200).send(query.toJSON());
    }

    /**
     * Function to get a competition by name
     * @param {String} param0
     * @returns object
     */
    async show({ params, response }) {
        const { competition } = params;

        const respuesta = await GetDataShowUseCase.handle(competition);

        return response.status(respuesta.status).send(respuesta.data);
    }
}

module.exports = CompetitionController
