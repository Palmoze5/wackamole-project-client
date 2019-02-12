// const store = require('../store.js')

// Variables made to hide messages after a certain milisecond
const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}
const hideMessage = () => {
  setTimeout(() => {
    $('#delete-message').hide()
  }, 3000)
}
const hideViewMessage = () => {
  setTimeout(() => {
    $('#view-message').hide()
  }, 3000)
}
const hideCreateMessage = () => {
  setTimeout(() => {
    $('#create-message').hide()
  }, 3000)
}

const hideUpdateMessage = () => {
  setTimeout(() => {
    $('#update-message').hide()
  }, 3000)
}

// Success and failure notifications for the user
const onCreateJokeSuccess = function (data) {
  // $('#create-joke').trigger('reset')
  $('#create-message').show()
  $('#create-message').addClass('success')
  $('#create-message').removeClass('failure')
  $('#create-message').text('Created Joke was Successful!')
  $('#create-message').css('font-size', '20px')
  $('#create-message').css('text-align', 'center')
  $('#create-joke')[0].reset()
  hideCreateMessage()
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#get-jokes').show()
  $('#update-joke').show()
}

const onCreateJokeFailure = function () {
  $('#create-message').show()
  $('#create-message').addClass('failure')
  $('#create-message').removeClass('success')
  $('#create-message').text('ERROR on Creating Joke')
  $('#sign-up')[0].reset()
  $('#get-jokes').hide()
  hideAuthMessage()
}
const onViewAllJokesSuccess = function (response, data) {
  $('#view-message').show()
  $('#reset').trigger('click')
  $('#view-message').text('View All Jokes was Successful!')
  $('#view-message').css('font-size', '20px')
  $('#view-message').css('text-align', 'center')
  $('#view-message').css('color', 'black')
  $('#view-message').addClass('success')
  $('#view-message').removeClass('failure')
  hideViewMessage()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').removeClass('hidden')
  $('#sign-out').show()
  $('#change-password').show()
  $('#show-jokes-message').show()
  $('#joke-area').show()
  $('#joke-area').html('')

  // Made a function that will display each ID in HTML but will display below
  // the success notification to user
  response.jokes.forEach(function (joke) {
    const jokehtml = `
      <h4 id="show-jokes-message">ID # ${joke.id}: ${joke.joke_input}</h4>
    `
    $('#joke-area').append(jokehtml)
  })
  $('#show-jokes-message').css('text-align', 'center')
}

const onViewAllJokesFailure = function () {
  $('#view-message').show()
  $('#view-message').text('ERROR on Viewing All Jokes.')
  hideAuthMessage()
  $('#sign-in').show()
  $('#sign-in')[0].reset()
  $('#view-message').addClass('failure')
  $('#view-message').removeClass('success')
  $('#view-message').css('font-size', '20px')
  $('#view-message').css('text-align', 'center')
  $('#view-message').css('color', 'black')
}
const onUpdateJokesSuccess = function (data) {
  $('#update-message').show()
  $('#update-message').html('Update Joke Successful!')
  $('#update-message').css('font-size', '20px')
  $('#update-message').css('text-align', 'center')
  $('#update-message').css('color', 'black')
  $('#update-message').addClass('success')
  $('#update-message').removeClass('failure')
  hideUpdateMessage()
  $('#sign-up')[0].reset()
  $('#sign-up').hide()
  $('#sign-in')[0].reset()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
}

const onUpdateJokesFailure = function () {
  $('#update-message').show()
  $('#update-message').html('Failure on Updating Joke')
  $('#update-message').css('font-size', '20px')
  $('#update-message').css('text-align', 'center')
  $('#update-message').css('color', 'black')
  $('#update-message').addClass('failure')
  $('#update-message').removeClass('success')
  hideUpdateMessage()
}

const onDeleteJokesSuccess = function () {
  $('#delete-joke')[0].reset()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#delete-message').show()
  $('#delete-message').html('Deleted Joke Successful!')
  $('#delete-message').css('font-size', '20px')
  $('#delete-message').css('text-align', 'center')
  $('#delete-message').css('color', 'black')
  $('#delete-message').addClass('success')
  $('#delete-message').removeClass('failure')
  hideMessage()
  $('#change-password')[0].reset()
  $('#change-password').show()
  $('#sign-out').show()
}

const onDeleteJokesFailure = function () {
  $('#delete-message').show()
  $('#delete-message').html('Failure on Deleting Joke')
  $('#delete-message').css('font-size', '20px')
  $('#delete-message').css('text-align', 'center')
  $('#delete-message').css('color', 'black')
  $('#delete-message').addClass('failure')
  $('#delete-message').removeClass('success')
  hideMessage()
  $('#change-password')[0].reset()
}
module.exports = {
  onCreateJokeSuccess,
  onCreateJokeFailure,
  onViewAllJokesSuccess,
  onViewAllJokesFailure,
  onUpdateJokesSuccess,
  onUpdateJokesFailure,
  onDeleteJokesSuccess,
  onDeleteJokesFailure
}
