'use strict';

const Guest = use('App/Model/Guest');

class GuestController {

  * index (request, response) {
    let guests = yield Guest.all();
    yield response.json(guests.toJSON());
  }

  * store(request, response) {
    // Takes guest input
    const guestInfo = request.only('city', 'email', 'first_name', 'home_number', 'last_name', 'mobile_number', 'post_code', 'state', 'street', 'street_2');

    try {
        guestInfo.user_id = request.authUser.id;
        const newGuest = yield Guest.create(guestInfo);
        // Respond with updated user and address information in JSON object
        return response.status(201).json(newGuest.toJSON());
    } catch (e) {
      //  hit if there is a major error saving to the database
      return response.status(400).json({
        error: e.message
      });
    }
  }

  * saveWEReport(request, response){
    let weInfo = (request.only('weInfo'));
    let guestInfo = (request.only('guestInfo'));
    weInfo = JSON.stringify(weInfo);
    let guest = yield Guest.findBy('id', guestInfo.guestInfo.id);
    guest.we_info = weInfo;
    yield guest.save();
  }

//*********************************************************************
  * fetchWEReport(request, response){
    // let guestID = maybe something from stateparams on FE
    let guest = yield Guest.findBy('id', '214');
    // console.log(guest);
    // console.log(guest.we_info);
    return response.status(201).json(guest.toJSON());
  }

}

module.exports = GuestController;
