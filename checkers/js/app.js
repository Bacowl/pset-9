
const squares = Array.from(document.querySelectorAll("#board div"));
document.getElementById("board").onclick = takeTurn;

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
    redCheckers[redCheckers.length] = document.getElementById("55")
    redCheckers[redCheckers.length] = document.getElementById("58")
    redCheckers[redCheckers.length] = document.getElementById("60")
    redCheckers[redCheckers.length] = document.getElementById("62")
    redCheckers[redCheckers.length] = document.getElementById("64")

    win = null;
    render();
}

  function render() {
    board.forEach(function(mark, index) {
      squares[index].textContent = mark;    // writes an X or an O on board
    });
    for (var i = 0; i < redCheckers.length ; i++) {
      squares[redCheckers[i].id-1].style.color = "red"
    }
    for (var i = 0; i < board.length; i++) {
      if (squares[i].textContent == "♔") {
        squares[i].style.fontSize = "50px"
      }
    }
  }

  function takeTurn(e) {
    turn = document.getElementById("message").textContent.substring(6,document.getElementById("message").textContent.length)
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
      if ((board[index] == "\u2022" || board[index] == "♔") && turn.toLowerCase == squares[index].style.color) {
        alert("great job m8")
      } else {
        console.log(turn.toLowerCase())
        console.log(squares[index].style.color)
        console.log(board[index])
      }
    }
