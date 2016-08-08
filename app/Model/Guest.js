'use strict';

const Lucid = use('Lucid');
class Guest extends Lucid {


guests(){
    return this.belongsTo('App/Model/EventGuest')
}

}
module.exports = Guest;
