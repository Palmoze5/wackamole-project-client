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
  // Get the value of THAT Box ID
  // const boxText = $('#' + idOfBoxClicked).text()
  // Add 'X' or 'O' depending on existing box value
  // if (boxText === '') {
  // if (store.turn % 2 === 1) {
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

// Whack a Mole Game

// This code is based on code found at
// https://javascript30.com

// Create the Whack-a-Mole Game
// Class

// class WhackAMole {
//   constructor (startButton, moles, scoreOut, gameTimeLength, peepTimeMin, peepTimeMax) {
//     this.btnStart = startButton
//     this.moles = moles
//     this.scoreOut = scoreOut
//
//     this.moleImgSrc = 'https://res.michaelwhyte.ca/mole.png'
//     this.moleBonkedImg = new Image()
//     this.moleBonkedImg.src = 'https://res.michaelwhyte.ca/mole-whacked.png'
//
//     this.gameTime = gameTimeLength
//     this.minPeepTime = peepTimeMin
//     this.maxPeepTime = peepTimeMax
//     this.numOfMoles = this.moles.length
//
//     this.prevMoleNumber = null
//     this.timeUp = false
//     this.score = 0
//     this.gameTimer = null
//     this.peepTimer = null
//   }
//
//   init () {
//     this.score = 0
//     this.scoreOut.text(this.score)
//     this.timeUp = false
//     this.prevMoleNumber = null
//     this.btnStart.text('Stop Game')
//     this.peep()
//     this.gameTimer = setTimeout(() => {
//       console.log('Game Over...')
//       this.btnStart.text('Start Game')
//       this.timeUp = true
//     }, this.gameTime)
//   }
//
//   stop () {
//     console.log('Game Stopped...')
//     this.btnStart.text('Start Game')
//     this.timeUp = true
//     this.moles.removeClass('up')
//     clearInterval(this.peepTimer)
//     clearInterval(this.gameTimer)
//   }
//
//   peep () {
//     const time = this._randomTime(this.minPeepTime, this.maxPeepTime)
//     const mole = this._randomMole(this.moles)
//     mole.addClass('up')
//     this.peepTimer = setTimeout(() => {
//       mole.removeClass('up')
//       if (this.timeUp === false) {
//         this.peep()
//       }
//     }, time)
//   }
//
//   bonk (mole) {
//     mole.attr('src', this.moleBonkedImg.src)
//       .removeClass('up')
//       .addClass('bonked')
//       .one('transitionend', () => {
//         mole.attr('src', this.moleImgSrc)
//         mole.removeClass('bonked')
//       })
//     this.score++
//     this.scoreOut.text(this.score)
//   }
//
//   _randomTime (min, max) {
//     return Math.round(Math.random() * (max - min) + min)
//   }
//
//   randomMole (moles) {
//     const idx = Math.floor(Math.random() * this.numOfMoles)
//     const mole = moles.eq(idx)
//     if (idx === this.prevMoleNumber) {
//       console.log('...same mole...try again...')
//       return this._randomMole(moles)
//     }
//     this.prevMoleNumber = idx
//     return mole
//   }
// }

// Get a new instance of the Whack A Mole
//
// 2. Mole Image
// 3. Score out
// 4. Game Time Length (ms)
// 5. Peep Time Min (ms)
// 6. Peep Time Max (ms)
// const wam = new WhackAMole($('#btn-start'), $('.mole-pic'), $('#score-out'), 12000, 1000, 2000);
//
// // Game Event Handlers
// wam.btnStart.click(function(){
//
// if (wam.btnStart.text() === 'Start Game'){
// wam.init ();
// }else{
// wam.stop();
// }
//
// });
//
// wam.moles.click(function(){
//
// if($(this).hasClass('bonked')){
// return;
// }
//
// wam.bonk( $(this) );
//
// });

module.exports = {
  addGameHandlers
}
