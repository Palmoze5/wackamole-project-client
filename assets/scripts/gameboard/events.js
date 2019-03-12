'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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
  } else {
    return false
  }
}

const onBoxClick = function (event) {
  event.preventDefault()
  // Determines the Box ID that the user clicked
  const idOfBoxClicked = event.target.id
  // // Get the value of THAT Box ID
  // const boxText = $('#' + idOfBoxClicked).text()
  // Add 'X' or 'O' depending on existing box value
  // if (boxText === '') {
  // if (store.turn % 2 === 1) {
  $('#' + idOfBoxClicked).text('x')
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
}
const onShowAllGames = function (event) {
  event.preventDefault()
  api.showAllGames()
    .then(ui.onShowAllGamesSuccess)
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
