'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

// User Registration & Login
Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')
// Route.get('/profile', 'UserController.show')
Route.get('/profile', 'UserController.show').middleware('auth')

// Routes for Events
// Route.get('/events', 'EventController.index')
Route.get('/events', 'EventController.index').middleware('auth')
Route.delete('/events', 'EventController.delete').middleware('auth')
// Route.post('/event-create', 'EventController.store')
Route.post('/event-create', 'EventController.store').middleware('auth')

// Routes for Guests
Route.get('/guests', 'GuestController.index')
Route.post('/guests', 'GuestController.store')
// Route.get('/guests', 'GuestController.index').middleware('auth')
// Route.post('/guests', 'GuestController.store').middleware('auth')
