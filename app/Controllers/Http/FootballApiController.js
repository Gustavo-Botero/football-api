'use strict'

const GetDataIndexUseCase = use('App/UseCases/FootballApi/GetDataIndexUseCase');

class FootballApiController {

  /**
   * Function to consume the api
   * @param {String} param0
   * @returns object
   */
  async index({ params, response }) {
    const { leagueCode } = params;

    const league = await GetDataIndexUseCase.handle(leagueCode);

    return response.status(league.status)
      .send({
        message: league.message,
      });
  }
}

module.exports = FootballApiController
