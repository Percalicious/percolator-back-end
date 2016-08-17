'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

// User Registration & Login
Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')
Route.get('/profile', 'UserController.show').middleware('auth')

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

// Send email to single invited guest
Route.post('/', 'EventController.sendEmail')

// Run WE report for single RSVPed guest
Route.post('/runwe', 'EventController.runWEReport')

//Create the EventGuest relationship
Route.post('/createEventGuest', 'EventGuestController.createEventGuest')
Route.get('/event-guest/rsvp/:id', 'EventGuestController.guestEventView')


// Routes for Guests
Route.get('/guests', 'GuestController.index')
Route.post('/guests', 'GuestController.store').middleware('auth')
// Route.get('/guests', 'GuestController.index').middleware('auth')
// Route.post('/guests', 'GuestController.store').middleware('auth')
