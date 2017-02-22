// this is super complicated

function timeOfDay(number, element) {
  if (number === 1) {
    document.body.style["background-color"] = "yellow";
    document.getElementById("display").innerHTML = "Morning";
  }
  else if (number === 2) {
    document.body.style["background-color"] = "orange";
    document.getElementById("display").innerHTML = "Afternoon";
  }
  else if (number === 3) {
    document.body.style["background-color"] = "black";
    document.getElementById("display").innerHTML = "Evening";
  }
}

// this is much more simple!

function daylightColor(color) {
  document.body.style["background-color"] = color;
}