'use strict'

const Schema = use('Schema')

class EventsSchema extends Schema {

  up () {
    this.table('events', (table) => {
      table.dropColumn('eventEndTime');
      table.dropColumn('eventMessage');
      table.dropColumn('eventHideList');
      table.dropColumn('eventNotifyRSVP');
      table.dropColumn('eventAllowGuestInvites');
      table.dropColumn('eventAllowGuestShares');
      table.dropColumn('eventMaxSize');
    })
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsSchema
