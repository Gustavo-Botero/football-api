'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.get('import/:leagueCode', 'FootballApiController.index');
    Route.get('players/:leagueCode/:team?', 'PlayerController.index');
    Route.get('team', 'TeamController.index');
    Route.get('team/:team/:players?', 'TeamController.show');
    Route.get('competition', 'CompetitionController.index');
    Route.get('competition/:competition', 'CompetitionController.show');
    Route.get('player/:idPlayer/:idTeam', 'PlayerController.changeTeam');
}).prefix('api/football-api');
