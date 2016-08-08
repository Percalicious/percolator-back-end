'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

// User Registration & Login
Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')
Route.get('/profile', 'UserController.show').middleware('auth')

// Routes for Events
Route.get('/events', 'EventController.index')
Route.post('/events', 'EventController.store')
// Route.get('/events', 'EventController.index').middleware('auth')
// Route.post('/events', 'EventController.store').middleware('auth')

// Routes for Guests
Route.get('/guests', 'GuestController.index')
Route.post('/guests', 'GuestController.store')
// Route.get('/guests', 'GuestController.index').middleware('auth')
// Route.post('/guests', 'GuestController.store').middleware('auth')
