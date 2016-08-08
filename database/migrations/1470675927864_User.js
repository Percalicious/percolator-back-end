'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.dropColumn('firstname');
      table.string('first_name');
      table.dropColumn('homeNumber');
      table.string('home_number');
      table.dropColumn('lastname');
      table.string('last_name');
      table.dropColumn('mobileNumber');
      table.string('mobile_number');
     })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UserSchema
