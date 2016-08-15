'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

// User Registration & Login
Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')
Route.get('/profile', 'UserController.show').middleware('auth')
Route.post('/', 'EventController.sendEmail')

// Routes for Events

// Create event for logged in/authorized user
// Route.post('/event-create', 'EventController.store')
Route.post('/event-create', 'EventController.store').middleware('auth')
// All events for single user
Route.get('/my-events', 'EventController.index').middleware('auth')

// Single host view of event for a single user
Route.get('host/my-events/:id', 'EventController.userSingleEvent').middleware('auth')
// Route.get('host/my-events/:id', 'EventController.userSingleEvent')

// Delete single event for a single user
Route.delete('host/my-events/:id', 'EventController.destroy').middleware('auth')
// Route.delete('host/my-events:id', 'EventController.destroy')

// Routes for Guests
Route.get('/guests', 'GuestController.index')
Route.post('/guests', 'GuestController.store')
// Route.get('/guests', 'GuestController.index').middleware('auth')
// Route.post('/guests', 'GuestController.store').middleware('auth')