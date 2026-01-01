let firstValueArr = [];
let operation;
let secondValueArr = [];
let mode = "first";

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
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

const btnContainer = document.querySelector("#btnContainer")
const display = document.querySelector("#display")


function updateDisplay (text) {
    display.value = text;
}

function ifNumber (num) {
    if (mode === "first") {
        firstValueArr.push(num);
        updateDisplay(firstValueArr.join(""));
    } else if (mode === "second") {
        secondValueArr.push(num);
        updateDisplay(secondValueArr.join("")); 
    }
}

function ifOperator (value) {
    if (secondValueArr.length > 0) {
        let result = ifEqual()
        updateDisplay(result);
        firstValueArr = Array.from(String(result), Number);
        secondValueArr = [];
    }
    operation = value;
    mode = "second"
}

function ifEqual () {
    let num1 = Number(firstValueArr.join(""))
    let num2 = Number(secondValueArr.join(""))
    let result = operate(operation, num1, num2);
    updateDisplay(result);
    return result;
}

function ifClear () {
    firstValueArr = [];
    operation = "";
    secondValueArr = [];
    mode = "first";
    updateDisplay("");
}

function ifDelete () {
    if (mode === "first"){
        firstValueArr.pop();
        updateDisplay(firstValueArr.join(""));
    } else if (mode === "second") {
        secondValueArr.pop();
        updateDisplay(secondValueArr.join("")); 
    }
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
    } else if (btn.id === "delBtn") {
        ifDelete()
    }
})












