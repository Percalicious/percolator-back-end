'use strict'

const Lucid = use('Lucid')

class EventGuest extends Lucid {

  events() {
    return this.belongsTo('App/Model/Event')
  }

  guests() {
    return this.belongsTo('App/Model/Guest')
  }


}
module.exports = EventGuest
