// add button functionality
const btnArray = document.querySelectorAll("btn");

for (let i = 0; i < btnArray.length; i++) {
    (function(index) {
        btnArray[index].addEventListener("click", function(e) {
            console.log(e.target.className);
        })
    })(i);
};

// Create a stored display value
let displayValue = 0;

const changeDisplay = function(button) {
    
}

// Create operator function
const operate = function(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiple(a,b);
        case "/":
            return divide(a,b);
        default:
            return "ERROR!";
    };
};

// Create basic calculator functions
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a-b;
};

const multiply = function (a, b) {
    return a*b;
};

const divide = function (a,b) {
    if (b == 0) {
        return "You can't divide by zero!";
    }
    else {
        return a/b;
    }
};