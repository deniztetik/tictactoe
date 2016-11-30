$(function() {
  var turn = "X"
  initialize()

  function initialize() {
    // create clickListener
    $('button').click(function(event) {
      // change set buttons value and change turn after checking if the
      // space is already filled, and then check if a winning play has been played
      var button = $(event.target)
      if (!button.html()) {
        button.html(turn)
        checkWinner(turn);
        turn = (turn === "X" ? "O" : "X")
      }
    })
  }

  // function checkWinner(piece) {
  //   // check rows
  //   for (var i = 0; i < 3; i++) {
  //     var piecesInRow = 0;
  //     for (var j = 0; j < 3; j++) {
  //       var className = "#" + i + "," + j
  //       if ($(className).html() === piece) {
  //
  //       }
  //     }
  //   }
  //
  // }

})
