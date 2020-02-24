
const squares = Array.from(document.querySelectorAll("#board div"));

const blackCheckers = [];
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
    square1 = document.getElementById("1")
    document.getElementById("3") = square2
    document.getElementById("5") = square3
    document.getElementById("7") = square4
    document.getElementById("10") = square5
    document.getElementById("12") = square6
    document.getElementById("14") = square7
    document.getElementById("16") = square8
    document.getElementById("17") = square9
    document.getElementById("19") = square10
    document.getElementById("21") = square11
    document.getElementById("23") = square12

    document.getElementById("64") = square13
    document.getElementById("62") = square14
    document.getElementById("55") = square15
    document.getElementById("53") = square16
    document.getElementById("51") = square17
    document.getElementById("49") = square18
    document.getElementById("48") = square19
    document.getElementById("46") = square20
    document.getElementById("44") = square21
    document.getElementById("42") = square22
    document.getElementById("60") = square23
    document.getElementById("58") = square24

    square1 = blackCheckers[blackCheckers.length]
    square2 = blackCheckers[blackCheckers.length]
    square3 = blackCheckers[blackCheckers.length]
    square4 = blackCheckers[blackCheckers.length]
    square5 = blackCheckers[blackCheckers.length]
    square6 = blackCheckers[blackCheckers.length]
    square7 = blackCheckers[blackCheckers.length]
    square8 = blackCheckers[blackCheckers.length]
    square9 = blackCheckers[blackCheckers.length]
    square10 = blackCheckers[blackCheckers.length]
    square11 = blackCheckers[blackCheckers.length]
    square12 = blackCheckers[blackCheckers.length]

    square13 = redCheckers[redCheckers.length]
    square14 = redCheckers[redCheckers.length]
    square15 = redCheckers[redCheckers.length]
    square16 = redCheckers[redCheckers.length]
    square17 = redCheckers[redCheckers.length]
    square18 = redCheckers[redCheckers.length]
    square19 = redCheckers[redCheckers.length]
    square20 = redCheckers[redCheckers.length]
    square21 = redCheckers[redCheckers.length]
    square22 = redCheckers[redCheckers.length]
    square23 = redCheckers[redCheckers.length]
    square24 = redCheckers[redCheckers.length]

    win = null;
    render();
}

  function render() {
    blackCheckers.forEach(function(mark, index) {
      squares[index].textContent = mark;    // writes an X or an O on board
    });
  }
