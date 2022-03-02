const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(min, sec) {
  printMinutes(min)
  printSeconds(sec)

}

function printMinutes(min) {
  minDecElement.textContent = min[0]
  minUniElement.textContent = min[1]

}

function printSeconds(sec) {
  secDecElement.textContent = sec[0]
  secUniElement.textContent = sec[1]
}

// ==> BONUS
function printMilliseconds(mill) {
  milDecElement.textContent = mill[0]
  milUniElement.textContent = mill[1]
}

function printSplit(min, sec, mill) {
  printMinutes(min)
  printSeconds(sec)
  printMilliseconds(mill)
}

function clearSplits() {
  
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
