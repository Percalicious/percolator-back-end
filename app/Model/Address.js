'use strict'

const Lucid = use('Lucid')

class Address extends Lucid {

  user () {
    return this.belongsTo('App/Model/User')
  }

  events () {
    return this.belongsTo('App/Model/Event')
  }

  guests () {
    return this.belongsTo('App/Model/Guest')
  }

}
module.exports = Address
