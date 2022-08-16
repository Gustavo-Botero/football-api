'use strict'

const GetDataIndexUseCase = use('App/UseCases/Player/GetDataIndexUseCase')
class PlayerController {

    /**
     * Function to consult the players of a league
     * @param {String} param0
     * @returns object
     */
    async index ({params, response}) {
        const { leagueCode, team } = params;

        let respuesta = await GetDataIndexUseCase.handle(leagueCode,team)

        return response.status(respuesta.status).send(respuesta.data);
    }
}

module.exports = PlayerController
