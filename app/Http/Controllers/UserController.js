* store (request, response) {
  const User = use('App/Model/User'); // or import these above somewhere
  const Hash = use('Hash');
  const input = request.only('email', 'password');
  input.password = yield Hash.make(input.password);

  const newUser = yield User.create(input);

  response.json(newUser.toJSON());
}
