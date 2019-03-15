const ui = require('../gameboard/ui.js')

const showCommentForm = function (gameId) {
  // Conditional checking if there is a form existing. This is a check if there
  // is an additional form. This would remove the form if user commented twice
  if ($(`*[data-formid="${gameId}"]`).length > 0) {
    $(`*[data-formid="${gameId}"]`).remove()
  } else {
    // if not, then put a form below
    $(`*[data-gameid="${gameId}"]`).append(
      `<form data-formid="${gameId}"><input type="text" name="text" placeholder="Your Comment Here" required><input type="submit" value="submit"></form>`
    )
  }
}
const onCreateCommentSuccess = function (response) {
  $('.leader-board-messages').show()
  $(`*[data-commentid="${response.game.id}"]`).text(response.game.comment)
  $(`*[data-formid="${response.game.id}"]`).remove()
  $(`*[data-buttonid="${response.game.id}"]`).text('Update Comment')
  $('.leader-board-messages').text('Created Comment Successfully!')
  $('.leader-board-messages').css('background-color', '#8fff90')
  $('.leader-board-messages').css('font-size', '20px')
  $('.leader-board-messages').css('text-align', 'center')
  ui.hideLeaderBoardMessage()
}
const onCreateCommentFailure = function () {
}
module.exports = {
  showCommentForm,
  onCreateCommentSuccess,
  onCreateCommentFailure
}
