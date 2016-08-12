'use strict'

const Schema = use('Schema')

class EventsAddDonateFieldsSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.string('suggested_donation');
      table.string('per_plate_currency');
      table.string('per_plate');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsAddDonateFieldsSchema
