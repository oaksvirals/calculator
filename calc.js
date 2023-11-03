// Global Operators
let operator = '';
let previousValue = '';
let currentValue = '';

// Storing Components
const clear = document.querySelector('#AC');
const equal = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');
const percent = document.querySelector('#percent');
const negPos = document.querySelector('#negPos');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');

// numbers
numbers.forEach((number) => number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}));

// operators
operators.forEach((op) => op.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + ' ' + operator;
    currentScreen.textContent = currentValue;
}));

// clear button
clear.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
});

// equal
equal.addEventListener('click', () => {
    if (currentValue != '' && previousValue != '') {
        calculate();
        previousScreen.textContent = '';
        if (previousValue.length >= 9) {
            currentScreen.textContent = previousValue.slice(0, 9) + '...';
        } else {
            currentScreen.textContent = previousValue;
        };
    }
});

// decimal
decimal.addEventListener('click', () => {
    addDecimal();
});

// percent

percent.addEventListener('click', () => {
    addPercent();
    currentScreen.textContent = currentValue;
});

// negative positive
negPos.addEventListener('click', () => {
    addNegPos();
    currentScreen.textContent = currentValue;
});

// functions
function handleNumber(num) {
    if(currentValue.length <= 9) {
        currentValue += num;
    };
};

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
};

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === '*') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    };

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
};

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
};

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
};

function addPercent() {
    currentValue = currentValue / 100;
};

function addNegPos() {
    if (!currentValue.includes('-')) {
        currentValue = '-' + currentValue;
    } else if (currentValue.includes('-')) {
        currentValue = currentValue.replace('-', '');
    };
};