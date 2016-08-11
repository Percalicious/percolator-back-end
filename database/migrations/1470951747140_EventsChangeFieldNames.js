'use strict'

const Schema = use('Schema')

class EventsChangeFieldNamesSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.dropColumn('eventCity');
      table.dropColumn('eventDate');
      table.dropColumn('eventPostCode')
      table.dropColumn('eventState');
      table.dropColumn('eventStreet');
      table.dropColumn('eventTitle');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsChangeFieldNamesSchema
