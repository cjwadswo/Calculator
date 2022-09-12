const display = document.getElementById("display");
let leftOperand = 0;
let rightOperand = 0;
let operand = null;

let additionButton = document.getElementById("add");
let subtractionButton = document.getElementById("subtract");
let multiplicationButton = document.getElementById("multiply");
let divisionButton = document.getElementById("divide");

function initalizeNumberButtons() {
    let numberButton;
    for(let i = 0; i < 10; i++) {
        numberButton = document.querySelector(`#num${i}`);
        numberButton.addEventListener('click', updateDisplay);  
    } 
}

function updateDisplay(e){
    if(operand === null){
        leftOperand = e.target.textContent;
        display.textContent += leftOperand;
        console.log(e.target.textContent);
    }
    else{
        leftOperand = e.target.textContent;
        display.textContent += num1;
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
}

function subtractionEvent() {
    operator = '-';
}

function multiplicationEvent() {
    operator = 'x'
}

function divisionEvent() {
    operator = '/';
}

initalizeNumberButtons();