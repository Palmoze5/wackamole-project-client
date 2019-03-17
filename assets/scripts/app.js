'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./gameboard/events.js')
//
//
$('#get-scores').hide()
$('#update-score').hide()
$('.game-board').hide()

$(() => {
  window.alert = function () { return false }
  authEvents.addHandlers()
  gameEvents.addGameHandlers()
})
