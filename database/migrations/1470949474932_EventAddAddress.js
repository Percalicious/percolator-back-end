'use strict'

const Schema = use('Schema')

class EventAddAddressSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.string('street');
      table.string('street_2');
      table.string('city');
      table.string('state');
      table.string('post_code');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventAddAddressSchema
