'use strict'

const Schema = use('Schema')

class CreateNewEventGuestTableSchema extends Schema {

  up () {
    this.create('event_guests', (table) => {
      table.increments()
      table.string('rsvp');
      table.string('rsvp_details');
      table.boolean('followed_up');
      table.integer('guest_id');
      table.integer('event_id');
      table.timestamps()
    })
  }

  down () {
    this.drop('event_guests')
  }

}

module.exports = CreateNewEventGuestTableSchema
