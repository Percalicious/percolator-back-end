'use strict'

const Schema = use('Schema')

class EventGuestAddUuidSchema extends Schema {

  up () {
    this.table('event_guests', (table) => {
      table.string('uuid').unique();
    })
  }

  down () {
    this.table('event_guests', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventGuestAddUuidSchema
