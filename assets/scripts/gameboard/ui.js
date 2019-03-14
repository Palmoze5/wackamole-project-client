const store = require('../store.js')

const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}

const createGameSuccess = function (data) {
  $('.game-board').show()
  $('#games-played').show()
  $('#game-message').show()
  $('#game-message').text('Enjoy the game!')
  $('#game-message').css('background-color', '#8fff90')
  $('#game-message').css('font-size', '20px')
  $('#game-message').css('text-align', 'center')
  store.game = data.game
}

const createGameFailure = function () {
  $('#message').text('Create Game Failed - Try Again')
  $('#message').css('background-color', '#ff91A3')
}
// Get Games
// const getGamesSuccess = function (data) {
//   console.log('data is ', data)
//   $('#game-message').text('Total Games for User ' + store.user.id + ': ' + data.games.length).css('font-weight', 'bold')
//   $('#games-played').show()
//   store.game = data.game
// }
//
// const getGamesFailure = function () {
//   $('#message').text('Getting Games Failed - Try Again')
//   $('#message').css('background-color', '#ff91A3')
// }

// change password messages
const updateGameSuccess = function (data) {
  $('#message').text('Game Updated Successfully')
  $('#message').css('background-color', '#8fff90')
  store.game = data.game
}

const updateGameFailure = function () {
  $('#message').text('Game Update Failed - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

const onShowAllGamesSuccess = function (response) {
  console.log('onShowAllGamesSuccess in Games UI.js ', response)
  $('#games-played-message').show()
  $('#leader-board-title').text('Games Played: ' + response.games.length)
  $('#games-played-message').css('background-color', '#8fff90')
  // $('#games-played-message').css('text-align', 'center')
  for (let i = 0; i < response.games.length; i++) {
    console.log(response.games[i])
    const points = response.games[i].points
    const email = response.games[i].user.email
    const userId = response.games[i].user.id
    const gameId = response.games[i].id
    const comment = response.games[i].comment
    let commentButton = ''
    let deleteButton = ''
    if (store.user.id === userId) {
      const buttonText = comment ? 'Update Comment' : 'New Comment'
      commentButton = `<button class="comment-button" data-buttonid="${gameId}">${buttonText}</button>`
      deleteButton = `<button class="delete-button" data-deleteid="${gameId}">Delete Game</button>`
    }
    $('#leader-board').append(`<div class="game-div"><p class="comment-wrapper" data-gameid="${gameId}">${email}: ${points}</p>${commentButton}${deleteButton}
      <p class="comment-text" data-commentid="${gameId}">${comment || ''}</p></div>`)
  }
}

const onShowAllGamesFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  hideAuthMessage()
}

const onDeleteGameSuccess = function (data) {
  const gameId = data.game.id
  $(`*[data-gameid="${gameId}"]`).parent().remove()
}

const onDeleteGameFailure = function () {
  alert('Delete FAILED!!')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  onShowAllGamesSuccess,
  onShowAllGamesFailure,
  onDeleteGameSuccess,
  onDeleteGameFailure
}
