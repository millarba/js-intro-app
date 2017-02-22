var sum = 0

function add(number) {
  sum += number;
  document.getElementById("printout").innerHTML = sum;
}

function reset() {
  sum = 0;
  document.getElementById("printout").innerHTML = sum;
}
