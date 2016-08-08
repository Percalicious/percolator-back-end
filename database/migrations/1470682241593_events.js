'use strict'

const Schema = use('Schema')

class EventsSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.integer('user_id');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsSchema
