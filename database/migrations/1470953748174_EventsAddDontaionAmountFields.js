'use strict'

const Schema = use('Schema')

class EventsAddDontaionAmountFieldsSchema extends Schema {

  up () {
    this.table('events', (table) => {
      // alter events table
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsAddDontaionAmountFieldsSchema
