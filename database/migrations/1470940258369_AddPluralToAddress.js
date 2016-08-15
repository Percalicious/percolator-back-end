'use strict'

const Schema = use('Schema')

class AddPluralToAddressSchema extends Schema {

  up () {
    this.drop('address');
  }

  down () {
    this.table('address', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddPluralToAddressSchema
