'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CompetitionTeam extends Model {

    /**
     * Relation with Competition
     * @returns
     */
    competition() {
        return this.belongsTo('App/Models/Competition');
    }

    /**
     * Relation with Team
     * @returns
     */
    team() {
        return this.belongsTo('App/Models/Team');
    }
}

module.exports = CompetitionTeam
