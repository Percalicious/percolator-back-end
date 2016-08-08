'use strict';

const Event = use('App/Model/Event');

class EventController {

  * index (request, response) {
    let events = yield Event.all();
    yield response.json(events.toJSON());
  }

  * store (request, response) {
    // Takes event input
    const input = request.all();
    // Create a new event
    const event = yield Event.create(input);
    // Respond with updated event information in JSON object
    return response.json(event.toJSON());
  }

}

module.exports = EventController;
