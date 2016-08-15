'use strict'

const Schema = use('Schema')

class GuestsSchema extends Schema {

  up () {
    this.create('guests', (table) => {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('home_number');
      table.string('mobile_number');
      table.timestamps();
    })
  }

  down () {
    this.table('guests', (table) => {
    })
  }

}

module.exports = GuestsSchema
