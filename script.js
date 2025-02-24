const numericButtons = document.querySelector('.numericButtons')
const operateButtons = document.querySelector('#operateButtons')
const equalClearButtons = document.querySelector('#equalClearButtons')

for (let i = 11; i >= 0; i--){
    const button = document.createElement('button');
    if(i === 1) {
        button.textContent = '+/-';
        button.classList.add('displayBtn');
        button.setAttribute('id', `plusMinusBtn`);
    }else{
        i === 2 ? button.textContent = '.':
        i === 0 ? button.textContent = '0':
        button.textContent = `${i-2}`;
        button.classList.add('displayBtn');
        button.setAttribute('id', `numericBtn`);
    }
        numericButtons.appendChild(button);
}

for (let i = 0; i < 4; i++){
    const button = document.createElement('button');
    operateButtons.appendChild(button);
        i === 0 ? button.textContent = 'X' :
        i === 1 ? button.textContent = '/' :
        i === 2 ? button.textContent = '-' :
        button.textContent = '+' ;
        button.classList.add('displayBtn');
    button.setAttribute('id', `opBtn`)
}

for (let i = 0; i < 2; i++){
    const button = document.createElement('button');
    equalClearButtons.appendChild(button);
         i === 0 ?  button.textContent = '=' : button.textContent = 'C' ;
    button.setAttribute('id', `equal`)
}

let operation = {
    firstNum: 0,
    secondNum: 0,
    activeKey: 'firstNum',
    operator: '',
} 

let opBtn = document.querySelectorAll("#opBtn");
let textArea = document.querySelector("textarea");
let numButtons = document.querySelectorAll("#numericBtn");

numButtons.forEach((btn) => {
    btn.addEventListener('click', () => addNumber(btn));
});

function addNumber(btn){
    textArea.textContent += btn.textContent;
    operation[operation.activeKey] = textArea.textContent;
    console.log(operation);
}

opBtn.forEach((btn) => {
    btn.addEventListener('click', () => callOperation(btn));
});

function callOperation(btn){
    switch (btn.textContent){
    case 'X':
        operation.operator = '*';
        break;
    case '/':
        operation.operator = '/';
        break;
    case '-':
        operation.operator = '-';
        break;
    case '+':
        operation.operator = '+';
        break;
    }
    textArea.textContent = '';
    operation.activeKey = 'secondNum';
    console.log(operation);
}

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    result = operate(operation.firstNum, operation.secondNum,operation.operator);
    console.log(result);
    textArea.textContent = result;
});



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
    return Number(a) + Number(b);
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