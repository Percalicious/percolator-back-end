'use strict';

const Event = use('App/Model/Event');
const Guest = use('App/Model/Guest');
const User = use('App/Model/User');
const EventGuest = use('App/Model/EventGuest');
const Env = use('Env');
var request = require('request');
var rp = require('request-promise');
var api_key = Env.get('MAILGUN_TOKEN');
var domainFill = 'mg.javahuddle.com';

var mailgun = require ('mailgun-js') ({apiKey: api_key, domain: domainFill});

class EventController {

  * index (request, response) {
    const user = yield User.findBy('id', request.authUser.id);
    const events = yield user.events().with("event_guest").fetch();
    return response.json(events.toJSON());
  }

  * createInit(request, response){
    const user = yield User.findBy('id', request.authUser.id);
    return response.json(user.toJSON());
  }

  * store(request, response) {
    // Grabs the user information
    const user = yield User.findBy('id', request.authUser.id);
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

  * userSingleEvent (request, response) {
    const user = yield User.findBy('id', request.authUser.id);
    let singleEvent = yield Event.findBy('id', request.param('id'));
    let rsvpInfo = yield singleEvent.event_guest().fetch();
    let guestsOfEvent = yield EventGuest.query().where('event_id', request.param('id')).fetch();
    let selectedGuests = guestsOfEvent.toJSON().map(function(eventGuestObj){
      return eventGuestObj.guest_id;
    });
    let allGuests = yield Guest.query().whereIn('id', selectedGuests);

    let totalResp = {
      allGuests: allGuests,
      eventInfo: singleEvent,
      rsvpInfo: rsvpInfo,
      user: user
    }
    return response.json(totalResp);
  }

  * destroy (request, response) {
    let deleteEvent = yield Event.findBy('id', request.param('id'));
    yield deleteEvent.delete();
    yield response.json({ success: true });
  }

  * sendEmail (request, response) {
        mailgun.messages().send(request._body, function(error, body){
        });
  }

  * runWEReport(frontEndRequest, response) {
    request({
      method: 'POST',
      // Sandbox API Environment (Random Fake Data)
      url: 'https://api-sandbox.wealthengine.com/v1/profile/find_one/by_address/full',
      // Production API Environment (Real Data)
      // url: 'https://api.wealthengine.com/v1/profile/find_one/by_address/full',
      json: true,
      headers: {
        Authorization: 'APIKey '+Env.get('WEALTHENGINE_TOKEN')
      },
      body: frontEndRequest._body
    },
    function (error, innerResponse, body) {
      if (error) {
        return console.error('upload failed:', error);
      }
      // Following line works for return to front end************************
      response.send(body);
  })

  }
}

module.exports = EventController;
