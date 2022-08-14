'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompetitionTeamSchema extends Schema {
  up () {
    this.create('competition_teams', (table) => {
      table.increments();
      table.integer('competition_id').unsigned().references('id').inTable('competitions');
      table.integer('team_id').unsigned().references('id').inTable('teams');
      table.timestamps()
    })
  }

  down () {
    this.drop('competition_teams')
  }
}

module.exports = CompetitionTeamSchema
