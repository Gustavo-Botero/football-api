'use strict'

const FootballApiService = use('App/Services/FootballApiService');
const CreateCompetitionUseCase = use('App/UseCases/Competition/CreateCompetitionUseCase');

class FootballApiController {

  /**
   * function to consume the api
   * @param {string} param0
   * @returns object
   */
  async index({ params, response }) {
    const { leagueCode } = params;
    let team = '';

    const league = await this.league(leagueCode);

    if(league.data.competition) {
      await CreateCompetitionUseCase.handle(league.data.competition);
    }

    if (league.data.teams) {
      team = await this.teams(league.data.teams)
    }

    return response.status(league.status)
      .send({
        league: league.data,
        teams: team
      });
  }

  /**
   * function to consult the leagues
   * @param {string} leagueCode
   * @returns object
   */
  async league(leagueCode) {
    const url = `https://api.football-data.org/v2/competitions/${leagueCode}/teams`;

    return await FootballApiService.consumeApi(url);
  }

  /**
   * function to consult team members
   * @param {object} data
   * @returns array
   */
  async teams(data) {
    let teams = [];

    for (const team of data) {

      if (team != null) {
        const url = `https://api.football-data.org/v2/teams/${team.id}`;
        const resTeam = await FootballApiService.consumeApi(url);

        teams.push(resTeam.data);
      }
    }

    return teams;
  }
}

module.exports = FootballApiController
