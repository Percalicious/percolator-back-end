'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.dropColumn('streetAddress')
      table.dropColumn('city')
      table.dropColumn('state')
      table.dropColumn('postCode')
    })
  }

  down () {
    this.table('users', (table) => {

    })
  }

}

module.exports = UserSchema
