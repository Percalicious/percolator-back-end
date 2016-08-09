'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * show(request, response) {
    return response.json(request.authUser);
  }

  * store(request, response) {
    // Takes user input & hashes the password
    const input = request.all();
    input.password = yield Hash.make(input.password);
    // Create a new user
    const user = yield User.create(input);
    //   // Respond with updated user information in JSON object
    return response.json(user.toJSON());

    // try {
    //   // Compare new entered email with emails in system
    //   const userEmail = yield User.findBy('email', input.email);
    //
    //   // If entered email matches an email in the database, return error
    //   if (userEmail == input.email) {
    //     return response.status(401).json({
    //       error: e.message
    //     });
    //   }
    // }
    // // If unable to find entered email, then allow new user to be created
    // catch (e) {
    //   const user = yield User.create(input);
    //   // Respond with updated user information in JSON object
    //   return response.json(user.toJSON());
    //
    // }
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
