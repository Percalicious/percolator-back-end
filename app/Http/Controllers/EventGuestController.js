'use strict';
const crypto = require('crypto');
const EventGuest = use('App/Model/EventGuest');
const Guest = use('App/Model/Guest');
const Event = use('App/Model/Event');

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
    let uuid = request.param('uuid');
    let eventGuest = yield EventGuest.findBy('uuid', uuid);
    let event = yield Event.findBy('id', eventGuest.event_id);
    return response.json(event);
  }

  * guestEventUpdate(request, response) {
    let eg = request.only('egInfo');
    let g = request.only('guestInfo');
    let uuid = request.param('uuid');
    let eventGuest = yield EventGuest.findBy('uuid', uuid);
    if (eg.egInfo.rsvp != '' || null || undefined){eventGuest.rsvp = eg.egInfo.rsvp};
    if (eg.egInfo.rsvp_details != '' || null || undefined){eventGuest.rsvp_details = eg.egInfo.rsvp_details};
    yield eventGuest.save();

    let guest = yield Guest.findBy('id', eventGuest.guest_id);
    if (g.guestInfo.street != '' || null || undefined){guest.street = g.guestInfo.street};
    if (g.guestInfo.street_2 != '' || null || undefined){guest.street_2 = g.guestInfo.street_2};
    if (g.guestInfo.city != '' || null || undefined){guest.city = g.guestInfo.city};
    if (g.guestInfo.state != '' || null || undefined){guest.state = g.guestInfo.state};
    if (g.guestInfo.post_code != '' || null || undefined){guest.post_code = g.guestInfo.post_code};
    if (g.guestInfo.home_number != '' || null || undefined){guest.home_number = g.guestInfo.home_number};
    if (g.guestInfo.mobile_number != '' || null || undefined){guest.mobile_number = g.guestInfo.mobile_number};
    yield guest.save();

    // Add guest info to response object and return for eventual WE report lookup.
    let currentGuest = {
      id: guest.id,
      first_name: guest.first_name,
      last_name: guest.last_name,
      email: guest.email,
      street: guest.street,
      street_2: guest.street_2,
      city: guest.city,
      state: guest.state,
      post_code: guest.post_code,
      home_number: guest.home_number,
      mobile_number: guest.mobile_number
      }
    return response.json(currentGuest);
  }

}


module.exports = EventGuestController;
