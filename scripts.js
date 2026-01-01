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

const buttons = document.querySelectorAll("button")
let display = document.querySelector("#display")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        display.value += e.target.innerText
        num1 = e.target.innerText
    });
})









