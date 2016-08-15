'use strict'

const Schema = use('Schema')

class GuestAddAddressSchema extends Schema {

  up () {
    this.table('guests', (table) => {
      table.string('street');
      table.string('street_2');
      table.string('city');
      table.string('state');
      table.string('post_code');
    })
  }

  down () {
    this.table('guests', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = GuestAddAddressSchema
