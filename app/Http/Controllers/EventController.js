'use strict';

const Event = use('App/Model/Event');
const User = use('App/Model/User');
const Env = use('Env');

var api_key = Env.get('MAILGUN_TOKEN');
var domainFill = 'mg.javahuddle.com';

var mailgun = require ('mailgun-js') ({apiKey: api_key, domain: domainFill});

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
      console.log(eventInfo);
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
    let singleEvent = yield Event.findBy('id', request.param('id'));
    return response.json(singleEvent.toJSON());
  }

  * destroy (request, response) {
    console.log('On backend destroy');
    let deleteEvent = yield Event.findBy('id', request.param('id'));
    yield deleteEvent.delete();
    yield response.json({ success: true });
  }

  * sendEmail (request, response) {
        mailgun.messages().send(request._body, function(error, body){
          console.log(body);
        });
        console.log(response);
  }

}

module.exports = EventController;
