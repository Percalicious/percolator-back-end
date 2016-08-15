'use strict'

const Schema = use('Schema')

class AddressTableRemovalSchema extends Schema {

  up () {
    this.drop('addresses');
  }

  down () {
    this.table('addresses', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddressTableRemovalSchema
