'use strict'

const Schema = use('Schema')

class EventsAddNewFieldNamesSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.boolean('allow_guest_invites');
      table.boolean('donate');
      table.string('date');
      table.string('end_time');
      table.text('message');
      table.string('start_time');
      table.string('title');
      table.boolean('hide_list');
      table.integer('max_size');
      table.boolean('notify_rsvp');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsAddNewFieldNamesSchema
