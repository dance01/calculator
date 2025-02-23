const numericButtons = document.querySelector('#numericButtons')
const operateButtons = document.querySelector('#operateButtons')
const equalClearButtons = document.querySelector('#equalClearButtons')

for (let i = 11; i >= 0; i--){
    const button = document.createElement('button');
    numericButtons.appendChild(button);
        i === 0 ?  button.textContent = '0' :
        i === 1 ? button.textContent = '.' :
        i === 2 ?  button.textContent = '+/-' :
        button.textContent = `${i-2}`;
    button.setAttribute('id', `${button.textContent}`)
}

for (let i = 0; i < 4; i++){
    const button = document.createElement('button');
    operateButtons.appendChild(button);
        i === 0 ?  button.textContent = '*' :
        i === 1 ? button.textContent = '/' :
        i === 2 ?  button.textContent = '-' :
        i === 3 ?  button.textContent = '+' :
        button.textContent = `${i}`;
    button.setAttribute('id', `${button.textContent}`)
}

for (let i = 0; i < 2; i++){
    const button = document.createElement('button');
    equalClearButtons.appendChild(button);
         i === 0 ?  button.textContent = '=' : button.textContent = 'C' ;
    button.setAttribute('id', `${button.textContent.toLowerCase()}`)
}


let firstNum;
let secondNum;
let operator;

function operate (a,b,operator){
    switch (operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
    }
}


function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide (a,b) {
    return a / b;
};