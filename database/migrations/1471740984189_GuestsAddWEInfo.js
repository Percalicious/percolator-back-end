'use strict'

const Schema = use('Schema')

class GuestsAddWeInfoSchema extends Schema {

  up () {
    this.table('guests', (table) => {
      table.json('we_info');
      table.timestamp('we_info_updated');
    })
  }

  down () {
    this.table('guests', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = GuestsAddWeInfoSchema
