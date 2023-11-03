// Project Point 1) Basic Math Functions

function add(a, b) { // working on getting adding to work after initial addition
    calcValue = a + b;
    console.log(numberA);
    console.log(numberB);
    displayValue = '';
    operator = '';
    display(a + b);
    displayValue = '';
};

function subtract(a, b) {
    displayValue = '';
    operator = '';
    display(a - b);
    displayValue = '';
};

function multiply(a, b) {
    displayValue = '';
    operator = '';
    display(a * b);
    displayValue = '';
};

function divide(a, b) {
    displayValue = '';
    operator = '';
    display(a / b);
    displayValue = '';
};

// Project Point 2) Operation Variables

let numberA = 0;
let numberB = 0;
let operator = ''; // +, -, *, /
let calcValue = 0;

// Project Point 3) Operate Function

function operate(operator, numberA, numberB) {

    return operator === '+' ? add(numberA, numberB)
    : operator === '-' ? subtract(numberA, numberB)
    : operator === '*' ? multiply(numberA, numberB)
    : operator === '/' ? divide(numberA, numberB)
    : 'error performing operate function';
};

// Project Point 4) Self note for project. Create basic HTML calculator.

// Project Point 5) Function to populate display when number button is clicked, store number in variable display value

const numDisplay = document.querySelector('.numDisplay');

let displayValue = '';

function display(num) {
    if (displayValue === '0') {
        displayValue = '';
    };

    displayValue += num;
    numDisplay.textContent = displayValue;
};

// Project Point 6) Making Calculator Work

const numOne = document.querySelector('#one');
const numTwo = document.querySelector('#two');
const numThree = document.querySelector('#three');
const numFour = document.querySelector('#four');
const numFive = document.querySelector('#five');
const numSix = document.querySelector('#six');
const numSeven = document.querySelector('#seven');
const numEight = document.querySelector('#eight');
const numNine = document.querySelector('#nine');
const numZero = document.querySelector('#zero');

numOne.addEventListener('click', () => {
    display(1);
});
numTwo.addEventListener('click', () => {
    display(2);
});
numThree.addEventListener('click', () => {
    display(3);
});
numFour.addEventListener('click', () => {
    display(4);
});
numFive.addEventListener('click', () => {
    display(5);
});
numSix.addEventListener('click', () => {
    display(6);
});
numSeven.addEventListener('click', () => {
    display(7);
});
numEight.addEventListener('click', () => {
    display(8);
});
numNine.addEventListener('click', () => {
    display(9);
});
numZero.addEventListener('click', () => {
    display(0);
});

const opAdd = document.querySelector('#add');
const opSubtract = document.querySelector('#subtract');
const opMultiply = document.querySelector('#multiply');
const opDivide = document.querySelector('#divide');

opAdd.addEventListener('click', () => {
    numberA = Number(displayValue);
    displayValue = '';
    operator = '+';
});
opSubtract.addEventListener('click', () => {
    numberA = Number(displayValue);
    displayValue = '';
    operator = '-';
});
opMultiply.addEventListener('click', () => {
    numberA = Number(displayValue);
    displayValue = '';
    operator = '*';
});
opDivide.addEventListener('click', () => {
    numberA = Number(displayValue);
    displayValue = '';
    operator = '/';
});

const opEquals = document.querySelector('#equal');
const opClear = document.querySelector('#AC');
const opNegPos = document.querySelector('#negPos');
const opPercent = document.querySelector('#percent');

opEquals.addEventListener('click', () => {
    numberB = Number(displayValue);

    return operator === '+' ? add(numberA, numberB)
    : operator === '-' ? subtract(numberA, numberB)
    : operator === '*' ? multiply(numberA, numberB)
    : operator === '/' ? divide(numberA, numberB)
    : 'error with equals'
});
opClear.addEventListener('click', () => {
    numberA = 0;
    numberB = 0;
    operator = '';
    calcValue = 0;
    displayValue = '0';
    numDisplay.textContent = displayValue;
});
opNegPos.addEventListener('click', () => {
    
});
opPercent.addEventListener('click', () => {

});