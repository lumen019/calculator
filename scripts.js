let firstValue = [];
let operation;
let secondValue = [];
let mode = "first";

//math functions
function add (a, b) { 
    return a + b; 
}

function subtract (a, b){
    return a - b; 
}

function multiply (a, b) { 
   return a * b; 
}

function divide (a, b) {
    return a / b; 
}


function operate (operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2)
        case "x":
            return multiply(num1, num2)
        case "÷":
            return divide(num1, num2)
    }
}

const btnContainer = document.querySelector("#btnContainer")
const display = document.querySelector("#display")


function updateDisplay (value) {
    display.value = value;
}

function ifNumber (num) {
    if (mode === "first") {
        firstValue.push(num);
        updateDisplay(firstValue.join(""))
    } else if (mode === "second") {
        secondValue.push(num);
        updateDisplay(secondValue.join(""))
    }
}

function ifOperator (value) {
    operation = value;
    mode = "second"
}

function ifEqual () {
    let num1 = Number(firstValue.join(""))
    let num2 = Number(secondValue.join(""))
    let result = operate(operation, num1, num2);
    updateDisplay(result);
}

function ifClear () {
    firstValue = [];
    operation = "";
    secondValue = [];
    mode = "first";
    updateDisplay("");
}


btnContainer.addEventListener ("click", (e) => {
    const btn = e.target;

    if (btn.classList.contains("number")) {
        ifNumber(btn.innerText)
    } else if (btn.classList.contains("operator")) {
        ifOperator(btn.innerText)
    } else if (btn.id === "clearBtn") {
        ifClear()
    } else if (btn.id === "equalBtn") {
        ifEqual()
    }
})












