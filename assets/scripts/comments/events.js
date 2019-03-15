const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const gameId = event.target.dataset.formid
  api.patchComment(data, gameId)
    .then(ui.onCreateCommentSuccess)
    .catch(ui.onCreateCommentFailure)
  $(this).trigger('reset')
}
const onViewAllComments = function (event) {
  event.preventDefault()
  api.viewAllCommentsAPI()
    .then(ui.onViewAllCommentsSuccess)
    .catch(ui.onViewAllCommentsFailure)
  $('form').trigger('reset')
}
const onUpdateComment = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const id = data.text
  api.updateCommentAPI(data, id)
    .then(ui.onUpdateCommentsSuccess)
    .catch(ui.onUpdateCommentsFailure)
  $('form').trigger('reset')
}

const onDeleteComment = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target).joke_input
  api.deleteCommentAPI(data)
    .then(ui.onDeleteCommentsSuccess)
    .catch(ui.onDeleteCommentsFailure)
  $('form').trigger('reset')
}
const onCommentOpen = function (event) {
  // dataset is a property of an HTML with 'data' in it
  // looking into each div that displays single game and score information with
  // form fields attached to them
  const gameId = event.target.dataset.buttonid
  ui.showCommentForm(gameId)
  // creates an event handler for the specific form for that id to submit to
  // the database
  $(`*[data-formid="${gameId}"]`).submit(onCreateComment)
}
// Click Event handlers for Creating, Reading All, Updating and Deleteing Comments
const addCommentHandlers = function () {
  $('.comment-button').on('click', onCommentOpen)
}

module.exports = {
  onCreateComment,
  onViewAllComments,
  onUpdateComment,
  onDeleteComment,
  addCommentHandlers
}
