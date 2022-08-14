'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Team extends Model {

    /**
     * Relation with CompetitionTeam
     * @returns
     */
    competitionTeams() {
        return this.hasMany('App/Models/CompetitionTeam');
    }
}

module.exports = Team
