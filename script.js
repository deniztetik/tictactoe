$(function() {
  var turn = "X"
  initialize()

  function initialize() {
    // create clickListener
    $('button').click(function(event) {
      // change set buttons value and change turn after checking if the
      // space is already filled, and then check if a winning play has been played
      // , and change text headers appropriately
      var button = $(event.target)
      if (!button.html()) {
        button.html(turn)
        if (checkWinner(turn)) {
          console.log("<h1>" + turn + " wins!!</h1>")
          $("body").prepend("<h1>" + turn + " wins!!</h1>")
        } else {
          turn = (turn === "X" ? "O" : "X")
          $("#turn").html(turn + "'s Turn")
        }
      }
    })
  }

  function checkWinner(piece) {
    // check rows
    for (var i = 0; i < 3; i++) {
      var piecesInRow = 0;
      for (var j = 0; j < 3; j++) {
        var idName = "#" + i + j
        if ($(idName).html() === piece) {
          piecesInRow++
        }
      }
      if (piecesInRow === 3) return true
    }

    // check columns
    for (var i = 0; i < 3; i++) {
      var piecesInColumn = 0
      for (var j = 0; j < 3; j++) {
        var className = "#" + j + i
        if ($(className).html() === piece) {
          piecesInColumn++
        }
      }
      if (piecesInColumn === 3) return true
    }

    // check first diagonal
    var piecesInDiagonal = 0;
    for (var i = 0; i < 3; i++) {
      var className = "#" + i + i
      if ($(className).html() === piece) {
        piecesInDiagonal++
      }
    }
    if (piecesInDiagonal === 3) return true


    // check second diagonal
    var piecesInDiagonal = 0;
    for (var i = 0; i < 3; i++) {
      var className = "#" + i + (2 - i)
      if ($(className).html() === piece) {
        piecesInDiagonal++
      }
    }
    if (piecesInDiagonal === 3) return true
    return false;
  }

})
