'use strict'

const Schema = use('Schema')

class EventsAddPhotoUrlSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.string('photo_url');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsAddPhotoUrlSchema
