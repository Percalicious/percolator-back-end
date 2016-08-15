'use strict'

const Schema = use('Schema')

class EventsAddDontaionAmountFieldsSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.string('suggest_donation');
      table.string('per_plate');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsAddDontaionAmountFieldsSchema
