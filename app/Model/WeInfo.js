'use strict'

const Lucid = use('Lucid')

class WeInfo extends Lucid {

  guests () {
    return this.belongsTo('App/Model/Guest')
  }

}
module.exports = WeInfo
