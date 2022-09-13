const display = document.getElementById("display");
const expressionDisplay = document.getElementById("expression-display");
const additionButton = document.getElementById("add");
const subtractionButton = document.getElementById("subtract");
const multiplicationButton = document.getElementById("multiply");
const divisionButton = document.getElementById("divide");

let leftOperand = 0;
let rightOperand = 0;
let result = null;
let operator = null;

let evaluateBool = false;



function initalizeNumberButtons() {
    let numberButton;
    for(let i = 0; i < 10; i++) {
        numberButton = document.querySelector(`#num${i}`);
        numberButton.addEventListener('click', updateOperand);    
    } 
}

function updateOperand(e) {
    let numberSelected = e.target.textContent;
    if(operator != null) {
        if(rightOperand == 0) {
            rightOperand = numberSelected;
        }
        else {
            rightOperand += numberSelected;
        }
    }
    else if(leftOperand == 0) {
        leftOperand = numberSelected;
    }
    else if (leftOperand != 0) {
        leftOperand += numberSelected;
    }

    if(leftOperand != 0) {
        updateDisplay();
    }
}

function updateDisplay(){
   if(operator === null) {
    display.textContent = leftOperand;
   }
   else {
    expressionDisplay.textContent = leftOperand + operator;
    display.textContent = rightOperand;
   }


}


function initializeOperatorButtons() {

    additionButton.addEventListener('click',additionEvent);
    //Subtraction event listener
    subtractionButton.addEventListener('click',subtractionEvent);
    //Multiplication event listener
    multiplicationButton.addEventListener('click',multiplicationEvent);
    //Division event listener
    divisionButton.addEventListener('click',divisionEvent);
}

function additionEvent() {
    operator = '+';
    updateDisplay();
}

function subtractionEvent() {
    operator = '-';
    updateDisplay();
}

function multiplicationEvent() {
    operator = 'x'
    updateDisplay();
}

function divisionEvent() {
    operator = '/';
    updateDisplay();
}

function evaluate() {
    switch (operator) {
        case '+':
            add(leftOperand,rightOperand);
            break;
        case '-':
            subtract(leftOperand,rightOperand);
            break;
        case 'x':
            multiply(leftOperand,rightOperand);
            break;
        case '/':
            divide(leftOperand,rightOperand);
            break;
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

initalizeNumberButtons();
initializeOperatorButtons();