var nextNumber = 1;
var lastNumber = 11;

function clickNumber(number, element) {
  if (nextNumber === number) {
    element.style["background-color"] = "green";
    nextNumber ++;
  }
  if (lastNumber === nextNumber) {
    winner();
  }
}

function winner() {
  alert("You win!");
}