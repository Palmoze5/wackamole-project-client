'use strict'
//
const config = require('../config')
const store = require('../store')
// const ui = require('./ui.js')

const createJokeAPI = function (data) {
  // return $.ajax({
  //   url: config.apiUrl + '/jokes',
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'Token token=' + store.user.token
  //   },
  //   data: data
  // })
  return $.ajax({
    url: config.apiUrl + '/jokes',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}
//
// const patchJoke = function (index, letter, over) {
//   const payload = {
//     'game': {
//       'cell': {
//         'index': index,
//         'value': letter
//       },
//       'over': over
//     }
//   }
//   return $.ajax({
//     url: config.apiUrl + '/jokes/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: payload
//   })
// }

const viewAllJokesAPI = function () {
  console.log('viewAllJokesAPI')
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
  //   patchJoke,
  deleteJokeAPI
}
