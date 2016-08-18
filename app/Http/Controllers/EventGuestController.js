'use strict';
const crypto = require('crypto');
const EventGuest = use('App/Model/EventGuest');

class EventGuestController {

  * createEventGuest(request, response) {
    // Recives payload object from FE and sets local variable
    let eventGuest = request.only('eventID', 'guestInfo');

    eventGuest = {
      guest_id: eventGuest.guestInfo.id,
      event_id: eventGuest.eventID,
      rsvp: "Not responded",
      rsvp_details: "",
      followed_up: false
    }

    let buf = crypto.randomBytes(30);
    eventGuest.uuid = buf.toString('hex');
    // Should add functionality to check for wildly statistically improbable duplicate uuid
    try {
      const newEventGuest = yield EventGuest.create(eventGuest);
      // Respond with updated user and address information in JSON object
      return response.status(201).json(newEventGuest.toJSON());
    } catch (e) {
      //  hit if there is a major error saving to the database
      return response.status(400).json({
        error: e.message
      });
    }
  }

  * guestEventView(request, response) {
    // let eventGuest = request.all();
    // console.log(request);
    return response;
  }
  
}


module.exports = EventGuestController;
