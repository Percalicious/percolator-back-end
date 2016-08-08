'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {

  up () {
    this.create('address', (table) => {
      table.increments();
      table.string('street');
      table.string('street_2');
      table.string('city');
      table.string('state');
      table.string('post_code');
      table.timestamps();    })
  }

  down () {
    this.table('address', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddressSchema
