'use strict'

const authEvents = require('./auth/events.js')
const scoreEvents = require('./scores/events.js')

//
//
$('#get-scores').hide()
$('#update-score').hide()

$(() => {
  authEvents.addHandlers()
  scoreEvents.addScoreHandlers()
})
