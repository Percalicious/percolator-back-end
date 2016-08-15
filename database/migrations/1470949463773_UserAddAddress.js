'use strict'

const Schema = use('Schema')

class UserAddAddressSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.string('street');
      table.string('street_2');
      table.string('city');
      table.string('state');
      table.string('post_code');
      table.dropColumn('address_id');
    })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UserAddAddressSchema
