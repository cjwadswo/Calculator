const display = document.getElementById("display");
let leftOperand = 0;
let rightOperand = 0;
let operand = null;
//This function adds event listeners on the number buttons 
function initalizeNumberButtons() {
    let buttonNum;
    for(let i = 0; i < 10; i++) {
        buttonNum = document.querySelector(`#num${i}`);
        buttonNum.addEventListener('click', e => {
            if(operand === null){
                leftOperand = e.target.textContent;
                display.textContent += leftOperand;
                console.log(e.target.textContent);
            }
            else{
                leftOperand = e.target.textContent;
                display.textContent += num1;
            }
        })  
    } 
}

//This function
function initializeOperatorButtons() {
    //Addition event listener

    //Subtraction event listener

    //Multiplication event listener

    //Division event listener

}


initalizeNumberButtons();