const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateScore = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createScoreAPI(data)
    .then(ui.onCreateScoreSuccess)
    .catch(ui.onCreateScoreFailure)
  $('form').trigger('reset')
}
const onViewAllScores = function (event) {
  event.preventDefault()
  api.viewAllScoresAPI()
    .then(ui.onViewAllScoresSuccess)
    .catch(ui.onViewAllScoresFailure)
  $('form').trigger('reset')
}
const onUpdateScore = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const id = data.text
  api.updateScoreAPI(data, id)
    .then(ui.onUpdateScoresSuccess)
    .catch(ui.onUpdateScoresFailure)
  $('form').trigger('reset')
}

const onDeleteScore = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target).number
  api.deleteScoreAPI(data)
    .then(ui.onDeleteScoresSuccess)
    .catch(ui.onDeleteScoresFailure)
  $('form').trigger('reset')
}

// Click Event handlers for Creating, Reading All, Updating and Deleteing Jokes
const addScoreHandlers = function () {
  $('#create-score').on('submit', onCreateScore)
  $('#get-scores').on('submit', onViewAllScores)
  $('#update-score').on('submit', onUpdateScore)
  $('#delete-score').on('submit', onDeleteScore)
}

module.exports = {
  onCreateScore,
  onViewAllScores,
  onUpdateScore,
  onDeleteScore,
  addScoreHandlers
}
