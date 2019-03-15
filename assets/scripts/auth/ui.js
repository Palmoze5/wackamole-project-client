const store = require('../store.js')
const createGame = require('../gameboard/api')
const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}

const hideGameMessage = () => {
  setTimeout(() => {
    $('#game-message').hide()
  }, 3000)
}
const onSignUpSuccess = function (data) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').removeClass('failure')
  $('#auth-messages').text('Sign Up successful')
  hideAuthMessage()
  $('#sign-up')[0].reset()
  $('#create-score').hide()
}

const onSignUpFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  hideAuthMessage()
  $('#create-score').hide()
}
const onSignInSuccess = function (data) {
  store.user = data.user
  $('#reset').trigger('click')
  $('#auth-messages').text('Sign In successful!')
  $('#auth-messages').css('font-size', '20px')
  $('#auth-messages').css('text-align', 'center')
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').removeClass('failure')
  $('.game-board').show()
  $('#games-played').show()
  hideAuthMessage()
  hideGameMessage()
  $('#sign-out').removeClass('hidden')
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create-score').show()
  $('#create-score').removeClass('hidden')
  $('#get-scores').show()
  $('#update-score').show()
  $('#delete-score').show()
  createGame.createGame(data)
}

const onSignInFailure = function () {
  $('#sign-in').show()
  $('#auth-messages').show()
  $('#auth-messages').text('Error on Sign In. Please try again.')
  $('#auth-messages').addClass('failure')
  $('#auth-messages').css('text-align', 'center')
  $('#auth-messages').removeClass('success')
  $('#sign-in')[0].reset()
  $('#sign-up').show()
  $('#sign-up')[0].reset()
  hideAuthMessage()
  $('#create-score').hide()
  $('#games-played').hide()
}
const onSignOutSuccess = function (data) {
  $('#auth-messages').text('Sign Out Successful')
  $('#auth-messages').css('text-align', 'center')
  $('#auth-messages').addClass('success')
  $('#auth-messages').removeClass('failure')
  $('#auth-messages').show()
  hideAuthMessage()
  $('#sign-up')[0].reset()
  $('#sign-up').show()
  $('#sign-up').removeClass('failure')
  $('#sign-in')[0].reset()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-score').hide()
  $('#get-scores').hide()
  $('#update-score').hide()
  $('#delete-score').hide()
  $('#score-area').hide()
  $('.game-board').hide()
  $('#game-message').removeClass('success')
  $('#game-message').hide()
  $('#games-played-message').hide()
  $('#games-played-message').removeClass('success')
}

const onSignOutFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error On Sign Out')
  hideAuthMessage()
  $('#create-score').show()
}

const onChangePassSuccess = function () {
  $('#auth-messages').show()
  $('#reset').trigger('click')
  $('#auth-messages').text('Change Password SUCCESS!')
  $('#auth-messages').addClass('success')
  $('#auth-messages').css('text-align', 'center')
  $('#auth-messages').css('color', 'black')
  $('#auth-messages').css('font-size', '20px')
  $('#auth-messages').removeClass('failure')
  hideAuthMessage()
  $('#game-message').remove()
  $('#sign-up').hide()
  $('#create-score').show()
}

const onChangePassFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').css('text-align', 'center')
  $('#auth-messages').css('color', 'black')
  $('#auth-messages').css('font-size', '20px')
  $('#auth-messages').text('Change Password Failure')
  $('#auth-messages').removeClass('success')
  hideAuthMessage()
  $('#change-password')[0].reset()
  $('#create-score').show()
}
const onShowAllGamesSuccess = function () {
  $('#games-played').show()
  $('#games-played-message').removeClass('hidden')
  $('#games-played-message').addClass('success')
  $('#games-played-message').text('Here are the total games played on your account: ')
}

const onShowAllGamesFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  hideAuthMessage()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePassSuccess,
  onChangePassFailure,
  onShowAllGamesSuccess,
  onShowAllGamesFailure
}
