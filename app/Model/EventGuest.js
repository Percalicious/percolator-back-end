'use strict'

const Lucid = use('Lucid')

class EventGuest extends Lucid {

  event() {
    return this.belongsTo('App/Model/Event')
  }

  guest() {
    return this.belongsTo('App/Model/Guest')
  }


}
module.exports = EventGuest
