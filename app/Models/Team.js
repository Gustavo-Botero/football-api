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

    /**
     * Relation with Player
     * @returns
     */
    players() {
        return this.hasMany('App/Models/Player');
    }
}

module.exports = Team
