'use strict';

const Event = use('App/Model/Event');
const User = use('App/Model/User');
const Env = use('Env');
var request = require('request');
var rp = require('request-promise');
var api_key = Env.get('MAILGUN_TOKEN');
var domainFill = 'mg.javahuddle.com';

var mailgun = require ('mailgun-js') ({apiKey: api_key, domain: domainFill});

class EventGuestController {

  * createEventGuest (request, response) {
    const eventGuestInfo = request.only(all);
    console.log(eventGuestInfo);
    // const user = yield User.findBy('id', request.authUser.id);
    // const events = yield user.events().fetch();
    // return response.json(events.toJSON());
  }

  * store(request, response) {
    // Takes event input
    const eventInfo = request.all();

    try {
      console.log(eventInfo);
        // eventInfo.user_id = request.authUser.id;
        // const newEvent = yield Event.create(eventInfo);
        // // Respond with updated user and address information in JSON object
        // return response.status(201).json(newEvent.toJSON());
    } catch (e) {
      //  hit if there is a major error saving to the database
      // return response.status(400).json({
      //   error: e.message
      // });
    }
  }

  // * userSingleEvent (request, response) {
  //   let singleEvent = yield Event.findBy('id', request.param('id'));
  //   return response.json(singleEvent.toJSON());
  // }
  //
  // * destroy (request, response) {
  //   console.log('On backend destroy');
  //   let deleteEvent = yield Event.findBy('id', request.param('id'));
  //   yield deleteEvent.delete();
  //   yield response.json({ success: true });
  // }
  //
  // * sendEmail (request, response) {
  //       mailgun.messages().send(request._body, function(error, body){
  //         console.log(body);
  //       });
  //       console.log(response);
  // }
  //
  // * runWEReport(frontEndRequest, response) {
  //     console.log('frontEndRequest._body:');
  //     console.log(frontEndRequest._body);
  //
  //   request({
  //     method: 'POST',
  //     uri: 'https://api-sandbox.wealthengine.com/v1/profile/find_one/by_address/full',
  //     json: true,
  //     headers: {
  //       Authorization: 'APIKey '+Env.get('WEALTHENGINE_TOKEN')
  //     },
  //     body: frontEndRequest._body
  //   },
  //   function (error, innerResponse, body) {
  //     if (error) {
  //       return console.error('upload failed:', error);
  //     }
  //     console.log('Upload successful!  Server responded with:');
  //     console.log(body);
  //     response.send(body);
  // })
  // }
}

module.exports = EventGuestController;
