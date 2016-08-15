'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden() {
    return ['password']
  }

  static get rules () {
        return {
            email: 'required|email|unique:users',
            password: 'required',
        }
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
  
}
module.exports = User
