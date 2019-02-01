const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
// const jokeActions = require('./api')

// const createJoke = (data) => {
//   createJokeAPI()
//     .then(ui.createJokeSuccess)
//     .catch(ui.createJokeFailure)
// }

const onCreateJoke = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('create', data)
  api.createJokeAPI(data)
    // .then(ui.onCreateJokeSuccess)
    .then(() => {
      console.log('success')
    })
    .catch(ui.onCreateJokeFailure)
}
const onViewAllJokes = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.viewAllJokesAPI()
    .then(ui.onViewAllJokesSuccess)
    .catch(ui.onViewAllJokesFailure)
}
// const onUpdateJoke = function (event) {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//   api.changePass(data)
//     .then(ui.onUpdateJokesSuccess)
//     .catch(ui.onUpdateJokesFailure)
// }
//
const onDeleteJoke = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target).joke_input
  console.log(data)
  api.deleteJokeAPI(data)
    .then(ui.onDeleteJokesSuccess)
    .catch(ui.onDeleteJokesFailure)
}
const addJokeHandlers = function () {
  $('#create-joke').on('submit', onCreateJoke)
  $('#get-jokes').on('submit', onViewAllJokes)
  //   $('#update-joke').on('submit', onUpdateJoke)
  $('#delete-joke').on('submit', onDeleteJoke)
}
//
module.exports = {
  onCreateJoke,
  onViewAllJokes,
  //   onUpdateJoke,
  onDeleteJoke,
  addJokeHandlers
}
