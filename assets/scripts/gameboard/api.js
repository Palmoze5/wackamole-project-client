'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui.js')

const createGame = function () {
  createGameAPI()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const createGameAPI = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const patchGame = function (over) {
  const payload = {
    'game': {
      'points': store.game.points,
      'over': over
    }
  }
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: payload
  })
}

const showAllGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGame = function (gameId) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createGame,
  createGameAPI,
  patchGame,
  showAllGames,
  deleteGame
}
