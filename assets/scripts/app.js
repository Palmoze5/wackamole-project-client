'use strict'

const authEvents = require('./auth/events.js')
const jokeEvents = require('./jokes/events.js')

//
//
$('#get-jokes').hide()

$(() => {
  authEvents.addHandlers()
  jokeEvents.addJokeHandlers()
})
