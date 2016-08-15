'use strict'

const Schema = use('Schema')

class EventGuestSchema extends Schema {

  up () {
    this.create('event_guest', (table) => {
      table.increments();
      table.string('rsvp');
      table.string('rsvp_details');
      table.boolean('followed_up');
      table.timestamps();
    })
  }

  down () {
    this.table('event_guest', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventGuestSchema
