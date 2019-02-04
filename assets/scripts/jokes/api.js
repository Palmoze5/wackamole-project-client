'use strict'
//
const config = require('../config')
const store = require('../store')

const createJokeAPI = function (data) {
  return $.ajax({
    url: config.apiUrl + '/jokes',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const updateJokeAPI = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/jokes/' + id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const viewAllJokesAPI = function () {
  return $.ajax({
    url: config.apiUrl + '/jokes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteJokeAPI = function (id) {
  return $.ajax({
    url: config.apiUrl + '/jokes/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createJokeAPI,
  viewAllJokesAPI,
  updateJokeAPI,
  deleteJokeAPI
}
