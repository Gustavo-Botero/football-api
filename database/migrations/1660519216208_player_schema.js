'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerSchema extends Schema {
  up () {
    this.create('players', (table) => {
      table.increments();
      table.integer('api_id').notNullable();
      table.integer('team_id').unsigned().references('id').inTable('teams');
      table.string('name', 45).notNullable();
      table.string('position', 20).nullable();
      table.string('dateOfBirth', 20).notNullable();
      table.string('countryOfBirth', 45).nullable();
      table.string('nationality', 45).notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('players')
  }
}

module.exports = PlayerSchema
