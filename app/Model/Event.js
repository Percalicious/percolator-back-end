'use strict';

const Lucid = use('Lucid');
class Event extends Lucid {

  user () {
      return this.belongsTo('App/Model/User')
    }

}
module.exports = Event;
