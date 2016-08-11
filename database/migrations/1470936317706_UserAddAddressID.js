'use strict'

const Schema = use('Schema')

class UserAddAddressIdSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.integer('address_id');
    })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UserAddAddressIdSchema
