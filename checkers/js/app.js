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
  let blackCheckers = [];
  let redCheckers = [];
    document.getElementById("1") = blackCheckers[blackCheckers.length]
    document.getElementById("3") = blackCheckers[blackCheckers.length]
    document.getElementById("5") = blackCheckers[blackCheckers.length]
    document.getElementById("7") = blackCheckers[blackCheckers.length]
    document.getElementById("10") = blackCheckers[blackCheckers.length]
    document.getElementById("12") = blackCheckers[blackCheckers.length]
    document.getElementById("14") = blackCheckers[blackCheckers.length]
    document.getElementById("16") = blackCheckers[blackCheckers.length]
    document.getElementById("17") = blackCheckers[blackCheckers.length]
    document.getElementById("19") = blackCheckers[blackCheckers.length]
    document.getElementById("21") = blackCheckers[blackCheckers.length]
    document.getElementById("23") = blackCheckers[blackCheckers.length]

    document.getElementById("64") = redCheckers[redCheckers.length]
    document.getElementById("62") = redCheckers[redCheckers.length]
    document.getElementById("60") = redCheckers[redCheckers.length]
    document.getElementById("58") = redCheckers[redCheckers.length]
    document.getElementById("55") = redCheckers[redCheckers.length]
    document.getElementById("53") = redCheckers[redCheckers.length]
    document.getElementById("51") = redCheckers[redCheckers.length]
    document.getElementById("49") = redCheckers[redCheckers.length]
    document.getElementById("48") = redCheckers[redCheckers.length]
    document.getElementById("46") = redCheckers[redCheckers.length]
    document.getElementById("44") = redCheckers[redCheckers.length]
    document.getElementById("42") = redCheckers[redCheckers.length]
    win = null;
    render();
}

  function render() {
    board.forEach(function(mark, index) {
      squares[index].textContent = mark;    // writes an X or an O on board
    });
  }
