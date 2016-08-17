'use strict';

// const Event = use('App/Model/Event');
// const User = use('App/Model/User');
const EventGuest = use('App/Model/EventGuest');

class EventGuestController {



  // function generateUUID() {
  //   console.log('Inside UUID');
  //     var d = new Date().getTime();
  //     if(window.performance && typeof window.performance.now === "function"){
  //         d += performance.now();; //use high-precision timer if available
  //     }
  //     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //         var r = (d + Math.random()*16)%16 | 0;
  //         d = Math.floor(d/16);
  //         return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  //     });
  //     return uuid;
  // };


  * createEventGuest (request, response) {
    // Recives payload object from FE and sets local variable
    let eventGuest = request.only('eventID', 'guestInfo');

    eventGuest = {
      guest_id: eventGuest.guestInfo.id,
      event_id: eventGuest.eventID,
      rsvp: "Not responded",
      rsvp_details: "",
      followed_up: false
    }

    console.log(eventGuest);

    try {
        const newEventGuest = yield EventGuest.create(eventGuest);
        // Respond with updated user and address information in JSON object
        console.log(newEventGuest);
        return response.status(201).json(newEventGuest.toJSON());
    } catch (e) {
      //  hit if there is a major error saving to the database
      return response.status(400).json({
        error: e.message
      });
    }
  }

}

module.exports = EventGuestController;
