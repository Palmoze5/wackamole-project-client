'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./gameboard/events.js')
//
//
$('#get-scores').hide()
$('#update-score').hide()
$('.game-board').hide()

$(() => {
  authEvents.addHandlers()
  gameEvents.addGameHandlers()
})
