'use strict'

const Schema = use('Schema')

class EventsSchema extends Schema {

  up () {
    this.create('events', (table) => {
      table.increments();
      table.string('eventTitle');
      table.string('eventStreet');
      table.string('eventCity');
      table.string('eventState');
      table.string('eventPostCode');
      table.string('eventDate');
      table.string('eventStartTime');
      table.string('eventEndTime');
      table.string('eventMessage');
      table.string('eventHideList');
      table.string('eventNotifyRSVP');
      table.string('eventAllowGuestInvites');
      table.string('eventAllowGuestShares');
      table.string('eventMaxSize');
      table.string('eventDonate');
      table.timestamps();
    });
  }

  down () {
    this.table('events', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EventsSchema
