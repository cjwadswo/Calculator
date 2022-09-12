const display = document.getElementById("display");
let leftOperand = 0;
let rightOperand = 0;
let operand = null;

let additionButton = document.getElementById("add");
let subtractionButton = document.getElementById("subtract");
let multiplicationButton = document.getElementById("multiply");
let divisionButton = document.getElementById("divide");
//This function adds event listeners on the number buttons 
function initalizeNumberButtons() {
    let numberButton;
    //for loop is going to loop 10 times for the 10 number buttons.
    for(let i = 0; i < 10; i++) {
        //buttonNum is going to hold the value of the css element with the ID num${i}
        numberButton = document.querySelector(`#num${i}`);
        //Add the event listener to these number buttons
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
//This function
function initializeOperatorButtons() {
    
    //Addition event listener
    additionButton.addEventListener('click')
    //Subtraction event listener

    //Multiplication event listener

    //Division event listener

}


initalizeNumberButtons();