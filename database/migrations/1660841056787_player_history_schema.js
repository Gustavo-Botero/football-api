'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerHistorySchema extends Schema {
  up () {
    this.create('player_histories', (table) => {
      table.increments()
      table.integer('player_id').unsigned().references('id').inTable('players');
      table.integer('leaving_team').unsigned().references('id').inTable('teams');
      table.integer('entry_team').unsigned().references('id').inTable('teams');
      table.timestamps()
    })
  }

  down () {
    this.drop('player_histories')
  }
}

module.exports = PlayerHistorySchema
