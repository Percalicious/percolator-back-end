'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('firstname')
      table.string('lastname')
      table.string('mobileNumber')
      table.string('homeNumber')
      table.string('streetAddress')
      table.string('city')
      table.string('state')
      table.string('postCode')
      table.string('organization')
      table.string('category')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UserSchema
