'use strict';

const Event = use('App/Model/Event');
const User = use('App/Model/User');

class EventController {

  * index (request, response) {
    const user = yield User.findBy('id', request.authUser.id);
    const events = yield user.events().fetch();
    return response.json(events.toJSON());
  }

  * store(request, response) {
    // Takes event input
    const eventInfo = request.all();
    try {
        eventInfo.user_id = request.authUser.id;
        const newEvent = yield Event.create(eventInfo);
        // Respond with updated user and address information in JSON object
        return response.status(201).json(newEvent.toJSON());
    } catch (e) {
      //  hit if there is a major error saving to the database
      return response.status(400).json({
        error: e.message
      });
    }
  }

}

module.exports = EventController;
