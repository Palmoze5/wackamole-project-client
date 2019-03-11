'use strict'

const authEvents = require('./auth/events.js')
const scoreEvents = require('./scores/events.js')
const gameEvents = require('./gameboard/events.js')
//
//
$('#get-scores').hide()
$('#update-score').hide()

$(() => {
  authEvents.addHandlers()
  gameEvents.addGameHandlers()
  scoreEvents.addScoreHandlers()
})
