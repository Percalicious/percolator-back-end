'use strict'

const Schema = use('Schema')

class UsersAddPhotoUrlSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.string('photo_url');
    })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UsersAddPhotoUrlSchema
