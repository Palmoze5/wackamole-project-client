const showCommentForm = function (gameId) {
  $(`*[data-gameid="${gameId}"]`).append(
    `<form data-formid="${gameId}"><input type="text" name="text" placeholder="Your Comment Here" required><input type="submit" value="submit"></form>`
  )
}
const createCommentSuccess = function () {
  alert('Success!')
}
const createCommentFailure = function () {
  alert('Failed!')
}
module.exports = {
  showCommentForm,
  createCommentSuccess,
  createCommentFailure
}
