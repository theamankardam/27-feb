// all buttons
let decrementBtn = document.getElementById("decrementBtn");
let IncrementBtn = document.getElementById("IncrementBtn");
let resetBtn = document.getElementById("resetBtn");
let displayValue = document.getElementById("displayValue");


// decrment function
let dc = function (e) {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negative value not allowed");
    }
}


// Incrment function
let In = function (e) {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
        alert("10+ values are not allowed");
    } else {
        displayValue.innerText = value + 1;
    }
}


// reset functi
let re = function (e) {
    displayValue.innerText = 0;
}


// all evenListeners
decrementBtn.addEventListener('click', dc)
IncrementBtn.addEventListener('click', In)
resetBtn.addEventListener('click', re);
