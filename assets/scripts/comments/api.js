'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui.js')

const createComment = function (data, gameId) {
  console.log('create comment ', data)
  createCommentAPI(data, gameId)
    .then(ui.createCommentSuccess)
    .catch(ui.createCommentFailure)
}
const createCommentAPI = function (data, gameId) {
  const commentData = {comment: data}
  return $.ajax({
    url: config.apiUrl + `/games/${gameId}/comments`,
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: commentData
  })
}

const patchComment = function (over) {
  console.log(store)
  const payload = {
    'game': {
      'points': 1,
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

const showAllComments = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createComment,
  createCommentAPI,
  patchComment,
  showAllComments
}
