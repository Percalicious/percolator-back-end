'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden() {
    return ['password']
  }

  apiTokens() {
    return this.hasMany('App/Model/Token')
  }

  events() {
    return this.hasMany('App/Model/Event')
  }

  guests() {
    return this.hasMany('App/Model/Guest')
  }

  address() {
    return this.hasOne('App/Model/Address')
  }

}
module.exports = User
