'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Player extends Model {

    /**
     * Relation with Team
     * @returns
     */
    team() {
        return this.belongsTo('App/Models/Team');
    }

    /**
     * Relation with PlayerHistory
     * @returns
     */
    playerHisorys() {
        return this.hasMany('App/Models/PlayerHistory');
    }
}

module.exports = Player
