// const store = require('../store.js')

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
  $('#create-message').text('ERROR on Creating Joke')
  $('#sign-up')[0].reset()
  $('#get-jokes').hide()
  hideAuthMessage()
}
const onViewAllJokesSuccess = function (response, data) {
  $('#view-message').show()
  $('#reset').trigger('click')
  $('#view-message').text('text View All Jokes was Successful!')
  $('#view-message').css('font-size', '20px')
  $('#view-message').css('text-align', 'center')
  $('#view-message').css('color', 'green')
  $('#view-message').addClass('success')
  hideViewMessage()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').removeClass('hidden')
  $('#sign-out').show()
  $('#change-password').show()
  $('#show-jokes-message').show()
  $('#joke-area').show()
  response.jokes.forEach(function (joke) {
    const jokehtml = `
      <h4 id="show-jokes-message">ID # ${joke.id}: ${joke.joke_input}</h4>
    `
    $('#joke-area').append(jokehtml)
  })
  $('#show-jokes-message').css('text-align', 'center')
}

const onViewAllJokesFailure = function () {
  $('#auth-messages').text('ERROR on Viewing All Jokes.')
  hideAuthMessage()
  $('#sign-in').show()
  $('#sign-in')[0].reset()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').css('display', 'inline')
}
const onUpdateJokesSuccess = function (data) {
  $('#auth-messages').css('display', 'inline')
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Update Joke Successful')
  $('#auth-messages').hide()
  hideUpdateMessage()
  $('#sign-up')[0].reset()
  $('#sign-up').show()
  $('#sign-up').removeClass('success')
  $('#sign-in')[0].reset()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').show()
  $('#update-message').show()
  $('#update-message').html('Update Joke Successful!')
  $('#update-message').css('font-size', '20px')
  $('#update-message').css('text-align', 'center')
  $('#update-message').css('color', 'green')
  $('#update-message').addClass('success')
}

const onUpdateJokesFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('ERROR On Updating Joke')
  hideAuthMessage()
  $('#sign-out').addClass('failure')
}

const onDeleteJokesSuccess = function () {
  $('#change-password')[0].reset()
  $('#delete-joke')[0].reset()
  $('#auth-messages').removeClass('failure')
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Deleted Joke SUCCESS!')
  hideAuthMessage()
  $('#auth-messages').css('display', 'inline')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#delete-message').show()
  $('#delete-message').html('Deleted Joke Successful!')
  $('#delete-message').css('font-size', '20px')
  $('#delete-message').css('text-align', 'center')
  $('#delete-message').css('color', 'green')
  $('#delete-message').addClass('success')
  hideMessage()
}

const onDeleteJokesFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('ERROR on Deleting Joke')
  hideAuthMessage()
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
