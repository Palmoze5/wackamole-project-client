'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const commentEvents = require('../comments/events.js')

const bear = '🐻'

store.points = 0
store.gameBoard = ['', '', '', '', '', '', '', '', '']

const freezeBoard = () => {
  for (let i = 0; i < store.gameBoard.length; i++) {
    $('#' + i).unbind('click')
  }
}

const resetGame = () => {
  api.createGame()
  for (let i = 0; i < store.gameBoard.length; i++) {
    $('#' + i).text('')
    $('#' + i).on('click', onBoxClick)
    $('#game-message').html('')
    $('#games-played').show()
    $('#games-played-message').hide()
    $('#sign-in')[0].reset()
    $('#leader-board').html('')
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
    store.points = 0
  }
}

const winningGame = function () {
  if (store.points === 9) {
    const winningMessage = 'Your scored 10 points! Press RESET button and Try Again!'
    $('#game-message').html(winningMessage)
    $('#game-message').css('font-size', '35px')
    $('#game-message').css('text-align', 'center')
    $('#games-played').show()
    $('#games-played-message').hide()
    freezeBoard()
    return winningMessage
    // Write code where after a game is over through winning/losing to display
    // HTML of the scores and next to it a CRUD action of commentary
  } else {
    return false
  }
}

const onBoxClick = function (event) {
  event.preventDefault()
  // Determines the Box ID that the user clicked
  const idOfBoxClicked = event.target.id
  $('#' + idOfBoxClicked).text(bear)
  store.gameBoard[idOfBoxClicked] = 'x'
  store.points++
  if (winningGame()) {
    api.patchGame(true)
  } else {
    api.patchGame(false)
  }
  // }
  // }
  // See if somebody has won the game yet
  if (winningGame()) {
    $('#game-message').html(winningGame())
  }
  // console.log($('#0').html())
  // if ($('#').text() === '🐻') {
  //   const countid1 += 1
  //   (count % 2 === 0)
  //   console.log('disappear')
  //   let count = Math.floor(Math.random() * '')
  //   (count % 2 === 1)
  // }
}
const onDeleteGame = function (event) {
  event.preventDefault()
  const conf = confirm('Are you sure you want to delete this game?')
  if (conf) {
    const gameId = event.target.dataset.deleteid
    api.deleteGame(gameId)
      .then(ui.onDeleteGameSuccess)
      .catch(ui.onDeleteGameFailure)
  }
}

const addDeleteHandlers = function () {
  $('.delete-button').click(onDeleteGame)
}

const onShowAllGames = function (event) {
  event.preventDefault()
  api.showAllGames()
    .then(ui.onShowAllGamesSuccess)
    .then(commentEvents.addCommentHandlers)
    .then(addDeleteHandlers)
    .catch(ui.onShowAllGamesFailure)
}
const addGameHandlers = function () {
  $('.box').on('click', onBoxClick)
  $('#reset').on('click', resetGame)
  $('#games-played').on('click', onShowAllGames)
}

module.exports = {
  addGameHandlers
}
