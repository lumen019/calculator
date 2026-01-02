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
    num1 =Number(num1);
    num2 =Number(num2);

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            if(num2 === 0) { //displays error msg when divided by 0
                firstValueArr = [];
                operation = "";
                secondValueArr = [];
                mode = "first";

                display.value = "ERROR STUPID";
                return null;
            } else {
                return divide(num1, num2);
            }   
    }
}

const btnContainer = document.querySelector("#btnContainer");
const display = document.querySelector("#display");
const dotBtn = document.querySelector("#dotBtn");


function updateDisplay () { 
    // converts and joins array into string, adds spaces and operator if operator exist.
    let str = firstValueArr.join("");

    if (operation) {
        str = str + " " + operation + " ";
    }; 

    str += secondValueArr.join("");
    display.value = str;
}

function ifNumber (num) {
    if (mode === "first") {
        firstValueArr.push(num);
    } else if (mode === "second") {
        secondValueArr.push(num); 
    };
    updateDisplay();
}

function ifOperator (value) {
    if (secondValueArr.length > 0) {
        //if a second number already exist when operator is pressed, calculate first
        let result = ifEqual();
        firstValueArr = String(result).split(""); //sets the first value to result for chaining
        secondValueArr = [];
    }

    operation = value;
    mode = "second"
    updateDisplay();
}

function roundResult(num) {
    return Math.round(num*10000)/10000;
}

function ifEqual () {
    let num1 = Number(firstValueArr.join(""))
    let num2 = Number(secondValueArr.join(""))
    let result = operate(operation, num1, num2);

    //only updates display if result isn't null
    if(result !== null){
        result = roundResult(result);
        display.value = result;

        //reset after equal is pressed, while keep result as the firstValueArr.
        firstValueArr = String(result).split("");
        operation = "";
        secondValueArr = [];
        mode = "first";
    } else {
        //resets entirely if null 
        firstValueArr = [];
        secondValueArr = [];
        operation = "";
        mode = "first";
    }
    return result;
}

function ifClear () {
    firstValueArr = [];
    operation = "";
    secondValueArr = [];
    mode = "first";
    updateDisplay();
}

function ifDelete () {
    if (mode === "first"){
        firstValueArr.pop();
    } else if (mode === "second") {
        secondValueArr.pop();
    };
    updateDisplay();
}

//event delegator
btnContainer.addEventListener ("click", (e) => {
    const btn = e.target;

    if (btn.classList.contains("number")) {
        ifNumber(btn.innerText)
    } else if (btn.classList.contains("operator")) {
        ifOperator(btn.innerText)
    } else if (btn.id === "equalBtn") {
        ifEqual()
    } else if (btn.id === "clearBtn") {
        ifClear()
    } else if (btn.id === "delBtn") {
        ifDelete()
    }
})

//dot functionality, limit to 1 dot per value. 
dotBtn.addEventListener("click", () => {
    if (mode === "first") {
        if (firstValueArr.includes(".")) return;
        firstValueArr.push(".");
        updateDisplay();
    } else if (mode === "second") {
        if (secondValueArr.includes(".")) return;
        secondValueArr.push(".");
        updateDisplay(); 
    }
})
