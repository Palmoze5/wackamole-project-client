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
const onCreateScoreSuccess = function (data) {
  // $('#create-score').trigger('reset')
  $('#create-message').show()
  $('#create-message').addClass('success')
  $('#create-message').removeClass('failure')
  $('#create-message').text('Created Score was Successful!')
  $('#create-message').css('font-size', '20px')
  $('#create-message').css('text-align', 'center')
  $('#create-score')[0].reset()
  hideCreateMessage()
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#get-scores').show()
  $('#update-score').show()
}

const onCreateScoreFailure = function () {
  $('#create-message').show()
  $('#create-message').addClass('failure')
  $('#create-message').removeClass('success')
  $('#create-message').text('ERROR on Creating Score')
  $('#sign-up')[0].reset()
  $('#get-scores').hide()
  hideAuthMessage()
}
const onViewAllScoresSuccess = function (response, data) {
  $('#view-message').show()
  $('#reset').trigger('click')
  $('#view-message').text('View All Scores was Successful!')
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
  $('#show-scores-message').show()
  $('#score-area').show()
  $('#score-area').html('')

  // Made a function that will display each ID in HTML but will display below
  // the success notification to user
  response.scores.forEach(function (score) {
    const scorehtml = `
      <h4 id="show-scores-message">ID # ${score.id}: ${score.number}</h4>
    `
    $('#score-area').append(scorehtml)
  })
  $('#show-scores-message').css('text-align', 'center')
}

const onViewAllScoresFailure = function () {
  $('#view-message').show()
  $('#view-message').text('ERROR on Viewing All Scores.')
  hideAuthMessage()
  $('#sign-in').show()
  $('#sign-in')[0].reset()
  $('#view-message').addClass('failure')
  $('#view-message').removeClass('success')
  $('#view-message').css('font-size', '20px')
  $('#view-message').css('text-align', 'center')
  $('#view-message').css('color', 'black')
}
const onUpdateScoresSuccess = function (data) {
  $('#update-message').show()
  $('#update-message').html('Update Score Successful!')
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

const onUpdateScoresFailure = function () {
  $('#update-message').show()
  $('#update-message').html('Failure on Updating Score')
  $('#update-message').css('font-size', '20px')
  $('#update-message').css('text-align', 'center')
  $('#update-message').css('color', 'black')
  $('#update-message').addClass('failure')
  $('#update-message').removeClass('success')
  hideUpdateMessage()
}

const onDeleteScoresSuccess = function () {
  $('#delete-score')[0].reset()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#delete-message').show()
  $('#delete-message').html('Deleted Score Successful!')
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

const onDeleteScoresFailure = function () {
  $('#delete-message').show()
  $('#delete-message').html('Failure on Deleting Score')
  $('#delete-message').css('font-size', '20px')
  $('#delete-message').css('text-align', 'center')
  $('#delete-message').css('color', 'black')
  $('#delete-message').addClass('failure')
  $('#delete-message').removeClass('success')
  hideMessage()
  $('#change-password')[0].reset()
}
module.exports = {
  onCreateScoreSuccess,
  onCreateScoreFailure,
  onViewAllScoresSuccess,
  onViewAllScoresFailure,
  onUpdateScoresSuccess,
  onUpdateScoresFailure,
  onDeleteScoresSuccess,
  onDeleteScoresFailure
}
