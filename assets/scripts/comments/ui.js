const showCommentForm = function (gameId) {
  if ($(`*[data-formid="${gameId}"]`).length > 0) {
    $(`*[data-formid="${gameId}"]`).remove()
  } else {
    $(`*[data-gameid="${gameId}"]`).append(
      `<form data-formid="${gameId}"><input type="text" name="text" placeholder="Your Comment Here" required><input type="submit" value="submit"></form>`
    )
  }
}
const onCreateCommentSuccess = function (response) {
  console.log('onCreateCommentSuccess! ui.js, ')
  console.log(response)
  $(`*[data-commentid="${response.game.id}"]`).text(response.game.comment)
  $(`*[data-formid="${response.game.id}"]`).remove()
  $(`*[data-buttonid="${response.game.id}"]`).text('Update Comment')
}
const onCreateCommentFailure = function (error) {
  console.log('onCreateCommentFAILED! ui.js, ')
  console.log(error)
}
module.exports = {
  showCommentForm,
  onCreateCommentSuccess,
  onCreateCommentFailure
}
