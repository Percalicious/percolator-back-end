'use strict';

const Lucid = use('Lucid');
class Event extends Lucid {

  user() {
    return this.belongsTo('App/Model/User')
  }

  event_guest() {
    return this.hasMany('App/Model/EventGuest')
  }

  address() {
    return this.hasOne('App/Model/Address')
  }

}
module.exports = Event;
