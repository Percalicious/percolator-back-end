'use strict'

const Schema = use('Schema')

class WeinfoSchema extends Schema {

  up () {
    this.create('weinfo', (table) => {
      table.increments();
      table.integer('guest_id');
      table.date('date_retrived');
      table.timestamps();
      });
    }
  

  down () {
    this.table('weinfo', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = WeinfoSchema
