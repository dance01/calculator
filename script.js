const numericButtons = document.querySelector('.numericButtons')
const operateButtons = document.querySelector('#operateButtons')
const equalClearButtons = document.querySelector('#equalClearButtons')

for (let i = 11; i >= 0; i--){
    const button = document.createElement('button');
    if(i === 1) {
        button.textContent = '+/-';
        button.classList.add('displayBtn');
        button.setAttribute('id', `plusMinusBtn`);
    }else if(i === 2){
         button.textContent = '.';
         button.classList.add('displayBtn');
        button.setAttribute('id', `dotBtn`);
    }else{
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
    if (i === 0){
        button.textContent = '='; 
        button.setAttribute('id', `equal`);
    }else{
        button.textContent = 'C' ;
        button.setAttribute('id', 'clear');
    }
}

let operation = {
    firstNum: '',
    secondNum: '',
    tempResult: '',
    activeKey: 'secondNum',
    operator: '+',
} 

const opBtn = document.querySelectorAll("#opBtn");
const textArea = document.querySelector("textarea");
const numButtons = document.querySelectorAll("#numericBtn");
const plusMinus = document.querySelector("#plusMinusBtn");
const dotBtn = document.querySelector("#dotBtn");
equal();

dotBtn.addEventListener('click', () => dot(dotBtn)) 

function dot(btn){
    operation[operation.activeKey] += btn.textContent;
    textArea.textContent = operation[operation.activeKey]
    dotBtn.disabled = true;        
    };

function isFloat(n){
    return Number(n) === n && 1 !== 0;
};

numButtons.forEach((btn) => {
    btn.addEventListener('click', () => addNumber(btn));

});
function addNumber(btn){
    if(operation.tempResult === 'equal pressed'){
        clear()
    }
    if(btn.textContent === '.'){

    }
    operation[operation.activeKey] += btn.textContent;
    textArea.textContent = operation[operation.activeKey]
    console.log(operation);
}

opBtn.forEach((btn) => {
    btn.addEventListener('click', () => callOperation(btn));
});
function callOperation(btn){
    operation.firstNum = operate(operation.firstNum, operation.secondNum, operation.operator);
    textArea.textContent = operation.firstNum;
   
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
    };

    operation.activeKey = 'secondNum';
    operation.secondNum = '';
    operation.tempResult = 'equal not pressed';
    dotBtn.disabled = false;
    console.log(operation);
}

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    equal();
    operation.operator = '+';
    operation.tempResult = 'equal pressed';
    console.log(operation);
});
function equal(){
    operation.firstNum = operate(operation.firstNum, operation.secondNum, operation.operator);
    textArea.textContent = operation.firstNum;
    operation.activeKey = 'secondNum';
    operation.secondNum = '';
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    clear();
})
function clear(){
    operation.firstNum = '';
    operation.secondNum = '';
    operation.tempResult = '';
    operation.activeKey = 'secondNum';
    operation.operator ='+';
    textArea.textContent = '';
    dotBtn.disabled = false;
};

plusMinusBtn.addEventListener('click', () => plusMinusFun());

function plusMinusFun(){
    operation[operation.activeKey] = operation[operation.activeKey] * -1;
    textArea.textContent = operation[operation.activeKey];
    console.log(operation);
}

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