// app.js
var counter = undefined;

function counterUp() {
  document.querySelector("#counter").innerHTML = ++counter;
}

function resetCounter() {
  counter = 0;
  document.querySelector("#counter").innerHTML = counter;
}

resetCounter();
