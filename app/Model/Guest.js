'use strict';

const Lucid = use('Lucid');
class Guest extends Lucid {


  user() {
    return this.belongsTo('App/Model/User')
  }

  event_guest() {
    return this.hasMany('App/Model/EventGuest')
  }

  weinfo() {
    return this.hasOne('App/Model/WeInfo')
  }

}
module.exports = Guest;
