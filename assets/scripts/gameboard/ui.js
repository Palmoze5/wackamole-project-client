const store = require('../store.js')
// const events = require('./events.js')

const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}
const hideLeaderBoardMessage = () => {
  setTimeout(() => {
    $('.leader-board-messages').hide()
  }, 3000)
}
// const startTimer = function () {
//   setTimeout(() => {
//     events.winningGame()
//   }, 60000)
// }

const createGameSuccess = function (data) {
  $('.game-board').show()
  $('#games-played').show()
  $('#game-message').show()
  $('#game-message').text('Enjoy the game!')
  $('#game-message').css('background-color', '#8fff90')
  $('#game-message').css('font-size', '20px')
  $('#game-message').css('text-align', 'center')
  store.game = data.game
  // startTimer()
}

const createGameFailure = function () {
  $('#message').text('Create Game Failed - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

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
  $('#leader-board-title').text('Leader Score board')
  $('#games-played-message').css('background-color', '#8fff90')
  // for loop that goes through the games array and iterates in each property
  for (let i = 0; i < response.games.length; i++) {
    console.log(response.games[i])
    // defined variables which pull from the games array each property and gives
    // a value
    const points = response.games[i].points
    const email = response.games[i].user.email
    const userId = response.games[i].user.id
    const gameId = response.games[i].id
    const comment = response.games[i].comment
    // Our comment and delete buttons will start as empty
    let commentButton = ''
    let deleteButton = ''
    // This is the logic for switching between buttons
    if (store.user.id === userId) {
      // the button text will change depending on the state - if there is already
      // a comment on that particular user's game ID, then the button's text will switch to 'Update comment' and
      // if there has not been any comments, the button's text will present as
      // 'New Comment'
      const buttonText = comment ? 'Update Comment' : 'New Comment'
      // the comment and delete buttons will be on each single user ID
      // and put into the leader board
      commentButton = `<button class="comment-button" data-buttonid="${gameId}">${buttonText}</button>`
      deleteButton = `<button class="delete-button" data-deleteid="${gameId}">Delete Game</button>`
    }
    // the list of all total games will display below, the user's sign in (email), their score, and below that their comment
    // with a comment and delete button below them.
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
  $('.leader-board-messages').show()
  // Finds a specific game and removes a game
  $(`*[data-gameid="${gameId}"]`).parent().remove()
  $('.leader-board-messages').text('Game Deleted Successfully!')
  $('.leader-board-messages').css('background-color', '#8fff90')
  $('.leader-board-messages').css('font-size', '20px')
  $('.leader-board-messages').css('text-align', 'center')
  hideLeaderBoardMessage()
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
  onDeleteGameFailure,
  hideLeaderBoardMessage
}
