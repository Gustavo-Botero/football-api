'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamSchema extends Schema {
  up () {
    this.create('teams', (table) => {
      table.increments();
      table.integer('api_id').notNullable();
      table.string('name', 45).notNullable();
      table.string('tla', 15).notNullable();
      table.string('shortName', 15).notNullable();
      table.string('areaName', 15).notNullable();
      table.string('email', 45).nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('teams')
  }
}

module.exports = TeamSchema
