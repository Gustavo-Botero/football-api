'use strict'

const TeamModel = use('App/Models/Team');
const GetDataShowUseCase = use('App/UseCases/Team/GetDataShowUseCase');

class TeamController {

    /**
     * Function to get all teams
     * @param {*} param0
     * @returns object
     */
    async index({response}) {
        const query = await TeamModel.all();

        return response.status(200).send(query.toJSON());
    }

    /**
     * Function to get a team by name and players if required
     * @param {String} param0
     * @returns object
     */
    async show({ params, response }) {
        const { team, players } = params;

        const respuesta = await GetDataShowUseCase.handle(team, players);

        return response.status(respuesta.status).send(respuesta.data);
    }
}

module.exports = TeamController
