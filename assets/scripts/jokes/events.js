const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateJoke = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createJokeAPI(data)
    .then(ui.onCreateJokeSuccess)
    .catch(ui.onCreateJokeFailure)
  $('form').trigger('reset')
}
const onViewAllJokes = function (event) {
  event.preventDefault()
  api.viewAllJokesAPI()
    .then(ui.onViewAllJokesSuccess)
    .catch(ui.onViewAllJokesFailure)
  $('form').trigger('reset')
}
const onUpdateJoke = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const id = data.text
  api.updateJokeAPI(data, id)
    .then(ui.onUpdateJokesSuccess)
    .catch(ui.onUpdateJokesFailure)
  $('form').trigger('reset')
}

const onDeleteJoke = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target).joke_input
  api.deleteJokeAPI(data)
    .then(ui.onDeleteJokesSuccess)
    .catch(ui.onDeleteJokesFailure)
  $('form').trigger('reset')
}

// Click Event handlers for Creating, Reading All, Updating and Deleteing Jokes
const addJokeHandlers = function () {
  $('#create-joke').on('submit', onCreateJoke)
  $('#get-jokes').on('submit', onViewAllJokes)
  $('#update-joke').on('submit', onUpdateJoke)
  $('#delete-joke').on('submit', onDeleteJoke)
}

module.exports = {
  onCreateJoke,
  onViewAllJokes,
  onUpdateJoke,
  onDeleteJoke,
  addJokeHandlers
}
