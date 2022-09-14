const display = document.getElementById("display");
const expressionDisplay = document.getElementById("expression-display");
const additionButton = document.getElementById("add");
const subtractionButton = document.getElementById("subtract");
const multiplicationButton = document.getElementById("multiply");
const divisionButton = document.getElementById("divide");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");


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

   if(evaluateBool) {
    expressionDisplay.textContent = leftOperand+operator+rightOperand + '=';
    display.textContent = result;
    evaluateBool = false;
    rightOperand = 0;
   }


}


function initializeOperatorButtons() {

    additionButton.addEventListener('click',additionEvent);
    subtractionButton.addEventListener('click',subtractionEvent);
    multiplicationButton.addEventListener('click',multiplicationEvent);
    divisionButton.addEventListener('click',divisionEvent);
    equalButton.addEventListener('click',evaluate);
    clearButton.addEventListener('click',clearScreen);
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
    let a = parseInt(leftOperand);
    let b = parseInt(rightOperand);
    switch (operator) {
        case '+':
            result = add(a,b);
            evaluateBool = true;
            updateDisplay();
            leftOperand = "" + result;
            break;
        case '-':
            result = subtract(a,b);
            evaluateBool = true;
            updateDisplay();
            leftOperand = "" + result;
            break;
        case 'x':
            result = multiply(a,b);
            evaluateBool = true;
            updateDisplay();
            leftOperand = "" + result;
            break;
        case '/':
            result = divide(a,b);
            evaluateBool = true;
            updateDisplay();
            leftOperand = "" + result;
            break;
    }
}

function add(a,b){
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

function clearScreen() {
    leftOperand = 0;
    rightOperand = 0;
    result = null;
    operator = null;
    evaluateBool = false;
    display.textContent = "";
    expressionDisplay.textContent = "";
}
initalizeNumberButtons();
initializeOperatorButtons();