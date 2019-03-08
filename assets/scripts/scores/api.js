'use strict'
//
const config = require('../config')
const store = require('../store')

const createScoreAPI = function (data) {
  return $.ajax({
    url: config.apiUrl + '/scores',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const updateScoreAPI = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/scores/' + id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const viewAllScoresAPI = function () {
  return $.ajax({
    url: config.apiUrl + '/scores',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteScoreAPI = function (id) {
  return $.ajax({
    url: config.apiUrl + '/scores/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createScoreAPI,
  viewAllScoresAPI,
  updateScoreAPI,
  deleteScoreAPI
}
