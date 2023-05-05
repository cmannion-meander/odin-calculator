// create a function to update the display when buttons are pressed
const display = document.querySelector('#screen');

function displayValues(numbers) {
    const elements = document.getElementsByClassName('content');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    };
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = Math.round(numbers * 100) / 100;
    display.appendChild(content);
}

// add button functionality
const btnArray = document.querySelectorAll("btn");

for (let i = 0; i < btnArray.length; i++) {
    (function(index) {
        btnArray[index].addEventListener("click", function(e) {
            inputOperation(e.target.className);
        })
    })(i);
};

// Create a stored display value
let a = 0;
let displayValue = '';
let operator = 'add'; //default operator

const inputOperation = function(button) {
    console.log(button);
    if (button >= '0' && button <= '9') {
        displayValue += button.toString();
        displayValues(displayValue);
    } else if (button == 'equals') {
        console.log("Equals button");
        calcOutput = operate(a, operator, displayValue);
        displayValue = calcOutput;
        displayValues(calcOutput);
    } else if (button == 'clear') {
        return clear();
    }  else {
        console.log("Other operator button");
        // store display value number
        a = parseInt(displayValue); // this is not storing the display value -- returning ''
        console.log(a);
        // store desired operation
        operator = button;
        // reset display value
        displayValue = '';
        //displayValues(displayValue);
        //console.log(a);
        //console.log(operator);
    }
};

// Create operator function
const operate = function(a, operator, b) {
    switch (operator) {
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        default:
            return "ERROR!";
    };
};

// Create basic calculator functions
const add = function (a, b) {
    return parseInt(a)+parseInt(b);
};

const subtract = function (a, b) {
    return parseInt(a)-parseInt(b);
};

const multiply = function (a, b) {
    return parseInt(a)*parseInt(b);
};

const divide = function (a,b) {
    if (b == "0") {
        alert("You can't divide by zero you numpty!")
        return 0;
    }
    else {
        return parseInt(a)/parseInt(b);
    }
};

const clear = function () {
    console.log('clear pressed');
    a = 0;
    displayValue = '';
    operator = 'add';
    return displayValues(0);
};