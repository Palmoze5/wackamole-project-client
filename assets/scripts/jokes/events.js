const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
// const jokeActions = require('./api')

const onCreateJoke = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  event.preventDefault()
  api.createJokeAPI(data)
    .then(ui.onCreateJokeSuccess)
    .catch(ui.onCreateJokeFailure)
}
// const onViewAllJokes = function (event) {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//   api.viewAllJokes(data)
//     .then(ui.onViewAllJokesSuccess)
//     .catch(ui.onViewAllJokesFailure)
// }
// const onUpdateJoke = function (event) {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//   api.changePass(data)
//     .then(ui.onUpdateJokesSuccess)
//     .catch(ui.onUpdateJokesFailure)
// }
//
// const onDeleteJoke = function (event) {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//   api.signOut(data)
//     .then(ui.onDeleteJokesSuccess)
//     .catch(ui.onDeleteJokesFailure)
// }
const addJokeHandlers = function () {
  $('#create-joke').on('submit', onCreateJoke)
//   $('#get-jokes').on('submit', onViewAllJokes)
//   $('#update-joke').on('submit', onUpdateJoke)
//   $('#delete-joke').on('submit', onDeleteJoke)
}
//
module.exports = {
  onCreateJoke,
  //   onViewAllJokes,
  //   onUpdateJoke,
  //   onDeleteJoke,
  addJokeHandlers
}
