let displayArea = document.querySelector('.display');
let firstNumber = null;
let secondNumber = null;
let operatorSymbol = null;
let result = null;

function setupColours(){
    const buttons = document.querySelectorAll('button');
    for(let i=1; i<=buttons.length; i++){
        if (i<4) {
            buttons[i-1].style.setProperty('color','var(--eerieBlack)')
            buttons[i-1].style.setProperty('background-color','var(--lightGray)');
        }
        else if (i%4 === 0|| i ===19){
            buttons[i-1].style.setProperty('background-color','var(--vividGamboge');
            buttons[i-1].style.setProperty('color', 'white');
        }
        else buttons[i-1].style.setProperty('background-color','var(--darkLiver)');

    }

}

function addListeners(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        if(!isNaN(Number(button.textContent))) button.addEventListener('click', (e)=> updateDisplay(e.target.textContent));
        else button.addEventListener('click', (button)=> operatorAssignment(button.target.textContent));
    });
}

function addClasses(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        if(!isNaN(Number(button.textContent))) button.classList.add('number');
        else button.classList.add('operator');
    })
}

function updateDisplay(number){
    if (isNaN(Number(displayArea.textContent))) displayArea.textContent =0;
    let displayNumber = displayArea.textContent;

    if (!operatorSymbol){
        if (displayNumber==result){
            result = null;
            displayNumber = number;
        }
        else if(displayNumber==0 && number ===0);

        else if(displayNumber==0 && !displayNumber.includes('.')) displayNumber=number;

        else displayNumber+=number;

        displayArea.textContent= displayNumber;
        firstNumber = Number(displayNumber);
    }
    else{
        if (result!= null){
            firstNumber = result;
            result = null;
        }
        if (secondNumber === null) {
            displayArea.textContent= 0;
            displayNumber= displayArea.textContent;
        }

        if(displayNumber==0 && number ===0);

        else if(displayNumber==0 && !displayNumber.includes('.')) displayNumber=number;

        else displayNumber+=number;

        displayArea.textContent=displayNumber;
        secondNumber = Number(displayNumber);
    }


}

function operatorAssignment(operator){
    if (operator === '.' && !displayArea.textContent.includes('.')) displayArea.textContent+='.';
    else if(operator === 'AC') {
        displayArea.textContent=0;
        firstNumber = null;
        secondNumber = null;
        operatorSymbol = null;
        result = null;
    }

    else if(operator ==='=') {
        if (!operatorSymbol);
        else operation(firstNumber,secondNumber,operatorSymbol);
    }

    else if (operatorSymbol === operator && secondNumber === null){
        operatorSymbol = null;
    }

    else if (operatorSymbol){
        if (operator === '+' || operator ==='-' || operator === '/' || operator === '*'){
            operation(firstNumber,secondNumber,operatorSymbol);
            operatorSymbol = operator;
        }
    }

    else {
        operatorSymbol = operator;
    }
    
}

function operation(num1, num2, operator){
    switch(true){
        case(operator === '/' && num1 === 0 && num2 === 0):
        displayArea.textContent = 'Zero Divison Error';
        break;

        case(operator === '+'):
        result = num1 + num2;
        break;
        
        case(operator ==='-'):
        result = num1 - num2;
        break;

        case(operator ==='/'):
        result = num1 / num2;
        break;

        case(operator ==='*'):
        result = num1 * num2;
        break;
    }
    result *= 1;
    displayArea.textContent = result;
    firstNumber = null;
    secondNumber= null;
    operatorSymbol = null;
    console.log(num1,num2,operator);
}

setupColours();
addClasses();
addListeners();