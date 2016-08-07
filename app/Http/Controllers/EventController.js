'use strict';

const Event = use('App/Model/Event');

class EventController {

  * index (request, response) {
    let events = yield Event.all();
    yield response.json(events.toJSON());
  }
}

module.exports = EventController;
