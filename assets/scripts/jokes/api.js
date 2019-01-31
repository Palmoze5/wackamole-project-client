// // 'use strict'
//
// const config = require('../config')
// const store = require('../store')
// const ui = require('./ui.js')
//
// const createJoke = (data) => {
//   return $.ajax({
//     url: config.apiUrl + '/jokes',
//     method: 'POST',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: data
//   })
//   // createJokeAPI()
//   //   .then(ui.createJokeSuccess)
//   //   .catch(ui.createJokeFailure)
// }
//
// // const createJokeAPI = function (data) {
// //   return $.ajax({
// //     url: config.apiUrl + '/jokes',
// //     method: 'POST',
// //     headers: {
// //       'Authorization': 'Token token=' + store.user.token
// //     },
// //     data: data
// //   })
// // }
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
//
// const showAllJokes = function () {
//   return $.ajax({
//     url: config.apiUrl + '/jokes',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
//   const deleteJoke = () => {
//     deleteJokeAPI()
//       .then(ui.deleteJokeSuccess)
//       .catch(ui.deleteJokeFailure)
//   }
//
//   const deleteJokeAPI = function (data) {
//     return $.ajax({
//       url: config.apiUrl + '/jokes',
//       method: 'DELETE',
//       headers: {
//         'Authorization': 'Token token=' + store.user.token
//       },
//       data: data
//     })
// }
// module.exports = {
//   createJoke,
//   createJokeAPI,
//   patchJoke,
//   showAllJokes,
//   deleteJoke,
//   deleteJokeAPI
// }
