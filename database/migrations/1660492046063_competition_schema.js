'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompetitionSchema extends Schema {
  up () {
    this.create('competitions', (table) => {
      table.increments();
      table.integer('api_id').notNullable();
      table.string('name', 45).notNullable();
      table.string('code',15).notNullable();
      table.string('areaName', 15).notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('competitions')
  }
}

module.exports = CompetitionSchema
