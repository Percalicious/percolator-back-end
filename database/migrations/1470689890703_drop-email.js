'use strict'

const Schema = use('Schema')

class DropEmailSchema extends Schema {

  up () {
    this.drop('users');
  }

  down () {
  }

}

module.exports = DropEmailSchema
