var currentArray = [];

function three(number) {
  if (currentArray.indexOf(number) === -1) {
  currentArray.push(number);
  }
  checkIfWinner()
}

function checkIfWinner() {
  if (currentArray.length === 3 ) {
    alert("You win!");
  }
}