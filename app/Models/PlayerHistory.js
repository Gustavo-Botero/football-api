'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PlayerHistory extends Model {

    player() {
        return this.belongsTo('App/Models/Player');
    }

    leavingTeam() {
        return this.belongsTo('App/Models/Team', 'id', 'leaving_team');
    }

    entryTeam() {
        return this.belongsTo('App/Models/Team', 'id', 'entry_team');
    }

}

module.exports = PlayerHistory
