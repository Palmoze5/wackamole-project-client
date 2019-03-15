'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const commentEvents = require('../comments/events.js')

const bear = '🐻'
let time

store.points = 0
// the whole gameboard, which is an array that's initially empty
store.gameBoard = ['', '', '', '', '', '', '', '', '']

// starts the time for the gameboard
const startTimer = function () {
  setTimeout(() => {
    // For every 20 seconds it will display the winning game and points
    winningGame()
    // clearInterval stops the bears
    clearInterval(time)
  }, 20000)
}
// starts when the moles move
const startGamePlay = function () {
  // this sets a timeOut of 2 seconds, it places the bears in a random location
  // on the board, and it updates the gameboard's box marking with an 'x' of
  // where the bear is located
  time = setInterval(function () {
    const location = Math.floor(Math.random() * 9)
    $('#' + location).text(bear)
    store.gameBoard[location] = 'x'
  }, 2000)
}

// Upon winning the game, it causes the boxes to be unable to click
const freezeBoard = () => {
  for (let i = 0; i < store.gameBoard.length; i++) {
    $('#' + i).unbind('click')
  }
}
// upon clicking the reset button, it causes the gameboard to start with empty
// boxes then and points at zero, then causes the game to be filled with bears
// to play the wack-a-bear game
const resetGame = () => {
  startGamePlay()
  // this creates a game in the database, with the method create game
  api.createGame()
  // for loop that works on each of the 9 boxes
  for (let i = 0; i < store.gameBoard.length; i++) {
    // sets each of the text in squares as empty
    $('#' + i).text('')
    // sets each of the squares to not fire the click event
    $('#' + i).unbind('click')
    // sets each of the squres to be able to click the box
    $('#' + i).on('click', onBoxClick)
    $('#game-message').html('')
    $('#games-played').show()
    $('#games-played-message').hide()
    $('#sign-in')[0].reset()
    $('#leader-board').html('')
    // the gameboard is clear and points return to zero
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
    store.points = 0
  }
  // this is when the time restarts
  startTimer()
}

const winningGame = function () {
  const winningMessage = `Your scored ${store.points}! Press RESET button and Try Again!`
  $('#game-message').html(winningMessage)
  $('#game-message').css('font-size', '35px')
  $('#game-message').css('text-align', 'center')
  $('#games-played').show()
  $('#games-played-message').hide()
  $('#game-message').show()
  freezeBoard()
  api.patchGame(true)
  // Write code where after a game is over through winning/losing to display
  // HTML of the scores and next to it a CRUD action of commentary
}
// this function fires when you click on a box.
const onBoxClick = function (event) {
  event.preventDefault()
  // Determines the Box ID that the user clicked
  const idOfBoxClicked = event.target.id
  // this is a conditional that states if the position on the board location has
  // an 'x' that means there's a bear in there
  if (store.gameBoard[idOfBoxClicked] === 'x') {
    store.points++
    $('#' + idOfBoxClicked).text('')
    store.gameBoard[idOfBoxClicked] = ''
    // the location of the box will generate a random number between 0 to 9
    const location = Math.floor(Math.random() * 9)
    $('#' + location).text(bear)
    store.gameBoard[location] = 'x'
  }
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
  // $('.box').on('click', onBoxClick)
  $('#reset').on('click', resetGame)
  $('#games-played').on('click', onShowAllGames)
}

module.exports = {
  addGameHandlers
}
