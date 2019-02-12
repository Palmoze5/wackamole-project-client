const store = require('../store.js')

const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}

const onSignUpSuccess = function (data) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').removeClass('failure')
  $('#auth-messages').text('Sign Up successful')
  hideAuthMessage()
  $('#sign-up')[0].reset()
  $('#create-joke').hide()
}

const onSignUpFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  hideAuthMessage()
  $('#create-joke').hide()
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
  hideAuthMessage()
  $('#sign-out').removeClass('hidden')
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create-joke').show()
  $('#create-joke').removeClass('hidden')
  $('#get-jokes').show()
  $('#update-joke').show()
  $('#delete-joke').show()
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
  $('#create-joke').hide()
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
  $('#create-joke').hide()
  $('#get-jokes').hide()
  $('#update-joke').hide()
  $('#delete-joke').hide()
  $('#joke-area').hide()
}

const onSignOutFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error On Sign Out')
  hideAuthMessage()
  $('#create-joke').show()
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
  $('#sign-up').hide()
  $('#create-joke').show()
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
  $('#create-joke').show()
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePassSuccess,
  onChangePassFailure
}
