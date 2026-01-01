function add (arr) { 
    return arr.reduce((acc, num) => acc + num);
};

function subtract (arr){
    return arr.reduce((acc, num) => acc - num);
};

function multiply (arr) { 
   return arr.reduce((acc, num) => acc * num);
};

function divide (arr) {
    return arr.reduce((acc, num) => acc / num);
};

let num1;
let operator;
let num2;

function operate (operate, num1, num2) {
    if (operate === "+") {
        add(num1, num2);
    } else if (operate === "-") {
        subtract(num1, num2);
    } else if (operate === "/") {
        divide(num1, num2);
    } else 
        multiply(num1, num2);
    }


const buttonValues = [
    "Undo", "Clear", "÷", "x", "-", "+", "=",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]

for (let i = 0; i< buttonValues.length; i++){
    let value = buttonValues [i];
    let btnContainer = document.querySelector("#btnContainer");
    let button = document.createElement("button");
    btnContainer.appendChild(button);
    button.innerText = value;
};








