'use strict'

const Schema = use('Schema')

class GuestsAddWeInfoSchema extends Schema {

  up () {
    this.table('guests', (table) => {
      table.json('we_info');
    })
  }

  down () {
    this.table('guests', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = GuestsAddWeInfoSchema
