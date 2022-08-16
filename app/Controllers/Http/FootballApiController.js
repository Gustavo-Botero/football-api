'use strict'

const FootballApiService = use('App/Services/FootballApiService');
const CreateCompetitionUseCase = use('App/UseCases/Competition/CreateCompetitionUseCase');
const CreateTeamUseCase = use('App/UseCases/Team/CreateTeamUseCase');

class FootballApiController {

  /**
   * Function to consume the api
   * @param {String} param0
   * @returns object
   */
  async index({ params, response }) {
    const { leagueCode } = params;
    let competition;
    let team;

    const league = await this.league(leagueCode);

    if(league.data.competition) {
      competition = await CreateCompetitionUseCase.handle(league.data.competition);
    }

    if (league.data.teams) {
      team = await this.teams(league.data.teams, competition.id);
    }

    return response.status(league.status)
      .send({
        league: league.data,
        teams: team
      });
  }

  /**
   * Function to consult the leagues
   * @param {string} leagueCode
   * @returns object
   */
  async league(leagueCode) {
    const url = `https://api.football-data.org/v2/competitions/${leagueCode}/teams`;

    return await FootballApiService.consumeApi(url);
  }

  /**
   * Function to consult team members
   * @param {object} data
   * @param {Integer} competitionId
   * @returns array
   */
  async teams(data, competitionId) {
    let teams = [];
    const waitSeconds = seconds => {
      return new Promise (resolve => {
        setTimeout(() => {
          resolve (true);
        }, seconds);
      });
    }

    for (const team of data) {

      if (team != null) {
        await waitSeconds(6100);
        const url = `https://api.football-data.org/v2/teams/${team.id}`;
        const resTeam = await FootballApiService.consumeApi(url);
        await CreateTeamUseCase.handle(resTeam.data, competitionId);
        teams.push(resTeam.data);
      }
    }

    return teams;
  }
}

module.exports = FootballApiController
