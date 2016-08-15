'use strict';

const Guest = use('App/Model/Guest');

class GuestController {

  * index (request, response) {
    let guests = yield Guest.all();
    yield response.json(guests.toJSON());
  }

  * store (request, response) {
    const input = request.all();
    const guest = yield Guest.create(input);
    return response.json(guest.toJSON());
  }

}

module.exports = GuestController;
