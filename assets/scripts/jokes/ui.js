// const store = require('../store.js')

const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}

const onCreateJokeSuccess = function (data) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').removeClass('failure')
  $('#auth-messages').text('Created Joke was Successful!')
  hideAuthMessage()
  $('#sign-up')[0].reset()
  $('#create-joke')[0].reset()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onCreateJokeFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('ERROR on Creating Joke')
  $('#sign-up')[0].reset()
  hideAuthMessage()
}
// const onViewAllJokesSuccess = function (data) {
//   store.user = data.user
//   $('#reset').trigger('click')
//   $('#auth-messages').text('View All Jokes was Successful!')
//   $('#auth-messages').css('font-size', '20px')
//   $('#auth-messages').css('text-align', 'center')
//   $('#auth-messages').show()
//   $('#auth-messages').addClass('success')
//   $('#auth-messages').removeClass('failure')
//   hideAuthMessage()
//   $('#sign-in').hide()
//   $('#sign-up').hide()
//   $('#sign-out').removeClass('hidden')
//   $('#sign-out').show()
//   $('#change-password').show()
// }
//
// const onViewAllJokesFailure = function () {
//   $('#auth-messages').text('ERROR on Viewing All Jokes.')
//   $('#sign-in').show()
//   $('#sign-in')[0].reset()
//   $('#auth-messages').addClass('failure')
//   $('#auth-messages').css('display', 'inline')
//   $('#games-played').hide()
// }
// const onUpdateJokesSuccess = function (data) {
//   $('#auth-messages').css('display', 'inline')
//   $('#auth-messages').addClass('success')
//   $('#auth-messages').text('Update Joke Successful')
//   $('#auth-messages').hide()
//   hideAuthMessage()
//   $('#sign-up')[0].reset()
//   $('#sign-up').show()
//   $('#sign-up').removeClass('success')
//   $('#sign-in')[0].reset()
//   $('#sign-in').show()
//   $('#sign-out').hide()
//   $('#change-password').hide()
// }
//
// const onUpdateJokesFailure = function () {
//   $('#auth-messages').show()
//   $('#auth-messages').addClass('failure')
//   $('#auth-messages').text('ERROR On Updating Joke')
//   hideAuthMessage()
//   $('#sign-out').addClass('failure')
// }
//
// const onDeleteJokesSuccess = function () {
//   $('#change-password')[0].reset()
//   $('#auth-messages').removeClass('failure')
//   $('#auth-messages').addClass('success')
//   $('#auth-messages').text('Deleted Joke SUCCESS!')
//   hideAuthMessage()
//   $('#auth-messages').css('display', 'inline')
//   $('#sign-up').hide()
// }
//
// const onDeleteJokesFailure = function () {
//   $('#auth-messages').show()
//   $('#auth-messages').addClass('failure')
//   $('#auth-messages').text('ERROR on Deleting Joke')
//   hideAuthMessage()
//   $('#change-password')[0].reset()
// }
module.exports = {
  onCreateJokeSuccess,
  onCreateJokeFailure
//   onViewAllJokesSuccess,
//   onViewAllJokesFailure,
//   onUpdateJokesSuccess,
//   onUpdateJokesFailure,
//   onDeleteJokesSuccess,
//   onDeleteJokesFailure
}
