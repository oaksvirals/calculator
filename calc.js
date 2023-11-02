// Project Point 1) Basic Math Functions

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

// Project Point 2) Operation Variables

let numberA = 0;
let numberB = 0;
let operator = ''; // +, -, *, /

// Project Point 3) Operate Function

function operate(operator, numberA, numberB) {

    return operator === '+' ? add(numberA, numberB)
    : operator === '-' ? substract(numberA, numberB)
    : operator === '*' ? multiply(numberA, numberB)
    : operator === '/' ? divide(numberA, numberB)
    : 'error performing operate function';
};

// Project Point 4) Self note for project. Create basic HTML calculator.