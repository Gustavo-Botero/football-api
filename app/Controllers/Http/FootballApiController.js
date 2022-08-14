'use strict'

const FootballApiService = use('App/Services/FootballApiService');

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

    if (league.data.area) {
      team = await this.teams(league.data.seasons)
    }

    return response.status(league.status).send({
      league:league.data,
      teams: team
    });
  }

  /**
   * function to consult the leagues
   * @param {string} leagueCode
   * @returns object
   */
  async league(leagueCode) {
    const url = `https://api.football-data.org/v2/competitions/${leagueCode}`;

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

      if (team.winner != null) {
        const url = `https://api.football-data.org/v2/teams/${team.winner.id}`;
        const resTeam = await FootballApiService.consumeApi(url);

        teams.push(resTeam.data);
      }
    }

    return teams;
  }
}

module.exports = FootballApiController
