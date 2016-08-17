'use strict'

const Schema = use('Schema')

class RemoveEventGuestTableSchema extends Schema {

  up () {
    this.drop('event_guest');
  }

  down () {
    this.table('event_guest', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = RemoveEventGuestTableSchema
