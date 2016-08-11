'use strict';

const Event = use('App/Model/Event');

class EventController {

  * index (request, response) {
    let events = yield Event.all();
    yield response.json(events.toJSON());
  }

  * store (request, response) {

    // Create a new event
    const event = yield Event.create(input);
    // Respond with updated event information in JSON object
    return response.json(event.toJSON());
  }


  * store(request, response) {
    // Takes event input
    const eventInfo = request.all();

    try {
// ********************************************
        // eventInfo.user_id = somehow get the user ID and set it here
// ********************************************
        const newEvent = yield Event.create(eventInfo);
        // Respond with updated user and address information in JSON object
        return response.status(201).json(newEvent.toJSON());
      }
    } catch (e) {
      //  hit if there is a major error saving to the database
      return response.status(400).json({
        error: e.message
      });
    }
  }

}

module.exports = EventController;
