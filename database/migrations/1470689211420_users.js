'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.dropColumn('email');
    })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UserSchema
