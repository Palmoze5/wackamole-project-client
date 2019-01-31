'use strict'

const authEvents = require('./auth/events.js')
const jokeEvents = require('./jokes/events.js')

//
//
$(() => {
  authEvents.addHandlers()
  jokeEvents.addJokeHandlers()
})
