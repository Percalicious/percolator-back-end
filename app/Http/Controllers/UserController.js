'use strict';

const User = use('App/Model/User')
const Hash = use('Hash')
const Validator = use('Validator')

class UserController {

  * show(request, response) {
    return response.json(request.authUser);
  }

  * store(request, response) {
    // Takes user input & hashes the password
    const input = request.all();
    const validation = yield Validator.validate(input, User.rules);
    input.password = yield Hash.make(input.password);

    try {
      // if/else runs unique username validation
      // if validation fails, return error message
      if (validation.fails()) {
        response.status(422).json(validation.messages())
        return
      // if validation does not fail, create new user
      } else {
        const user = yield User.create(input);
        // Respond with updated user information in JSON object
        return response.status(201).json(user.toJSON());
      }
    }
    catch (e) {
     //  hit if there is a major error saving to the database
     return response.status(418).json({
       error: e.message
     });
    }
  }

  * login(request, response) {
    // Receive login input from user
    const input = request.only('email', 'password');

    try {
      // Find the user by email
      const user = yield User.findBy('email', input.email);
      // Verify the password matches the user. If not, error message.
      const verify = yield Hash.verify(input.password, user.password);
      if (!verify) {
        throw new Error('Incorrect password')
      };
      // Generate access token
      user.access_token = yield request.auth.generate(user);

      return response.json(user.toJSON());
    } catch (e) {
      return response.status(401).json({
        error: e.message
      });
    }
  }

}

module.exports = UserController;
