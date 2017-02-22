var win = 0
var colors = ["green", "red", "purple", "orange", "yellow"]

function jackhammer(element) {
  win ++;
  if (win === 1) {
    element.style["background-color"] = "green";
  }
  else if ( win === 2 ) {
    element.style["background-color"] = "red";
  }
  else if ( win === 3 ) {
    element.style["background-color"] = "purple";
  }
  else if ( win === 4 ) {
    element.style["background-color"] = "orange";
  }
  else if ( win === 5 ) {
    element.style["background-color"] = "yellow";
    alert("You win!");
  }
}

// function switchColor(element) {
//   element.style["background-color"] = colors[win];
// }