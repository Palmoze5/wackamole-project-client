'use strict'

const authEvents = require('./auth/events.js')
const jokeEvents = require('./jokes/events.js')

//
//
$('#get-jokes').hide()
$('#update-joke').hide()

$(() => {
  authEvents.addHandlers()
  jokeEvents.addJokeHandlers()
})
