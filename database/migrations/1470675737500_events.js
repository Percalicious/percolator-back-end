'use strict'

const Schema = use('Schema')

class EventsSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.dropColumn('eventStartTime');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsSchema
