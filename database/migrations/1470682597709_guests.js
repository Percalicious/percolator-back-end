'use strict'

const Schema = use('Schema')

class GuestsSchema extends Schema {

  up () {
    this.table('guests', (table) => {
      table.integer('user_id');
    })
  }

  down () {
    this.table('guests', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = GuestsSchema
