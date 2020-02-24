
const squares = Array.from(document.querySelectorAll("#board div"));

const redCheckers = [];

window.onload= function() {
  board = [
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  ];
    board[0] = "\u2022"
    board[2] = "\u2022"
    board[4] = "\u2022"
    board[6] = "\u2022"
    board[9] = "\u2022"
    board[11] = "\u2022"
    board[13] = "\u2022"
    board[15] = "\u2022"
    board[16] = "\u2022"
    board[18] = "\u2022"
    board[20] = "\u2022"
    board[22] = "\u2022"

    board[63] = "\u2022"
    board[61] = "\u2022"
    board[59] = "\u2022"
    board[57] = "\u2022"
    board[54] = "\u2022"
    board[52] = "\u2022"
    board[50] = "\u2022"
    board[48] = "\u2022"
    board[47] = "\u2022"
    board[45] = "\u2022"
    board[43] = "\u2022"
    board[41] = "\u2022"

    redCheckers[redCheckers.length] = document.getElementById("42")
    redCheckers[redCheckers.length] = document.getElementById("44")
    redCheckers[redCheckers.length] = document.getElementById("46")
    redCheckers[redCheckers.length] = document.getElementById("48")
    redCheckers[redCheckers.length] = document.getElementById("49")
    redCheckers[redCheckers.length] = document.getElementById("51")
    redCheckers[redCheckers.length] = document.getElementById("53")
    redCheckers[redCheckers.length] = document.getElementById("54")
    redCheckers[redCheckers.length] = document.getElementById("57")
    redCheckers[redCheckers.length] = document.getElementById("59")
    redCheckers[redCheckers.length] = document.getElementById("61")
    redCheckers[redCheckers.length] = document.getElementById("63")

    win = null;
    render();
}

  function render() {
    board.forEach(function(mark, index) {
      squares[index].textContent = mark;    // writes an X or an O on board
    });
    for (var i = 0; i < redCheckers.length; i++) {
      redCheckers[redCheckers[i].id].style.color = "red"
    }
  }
