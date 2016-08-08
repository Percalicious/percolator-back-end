'use strict'

const Schema = use('Schema')

class AddCategorySchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.string('organization')
      table.string('category')
    })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddCategorySchema
