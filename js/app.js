// app.js
var counter = 0;
resetCounter();
function resetCounter() {
    document.querySelector("#counter").innerHTML = 0;
}
function counterUp() {
    document.querySelector("#counter").innerHTML = ++counter;
}
