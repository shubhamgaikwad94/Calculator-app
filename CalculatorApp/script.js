// Display element
let displayBox = document.getElementById('display');

// Variables to store numbers and operator
let firstNumber = '';
let secondNumber = '';
let operator = '';
let isResultShown = false;

// Function to add number or dot to display
function addToDisplay(num) {
    if (isResultShown) {
        displayBox.value = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        isResultShown = false;
    }

    displayBox.value += num;

    if (operator === '') {
        firstNumber += num;
    } else {
        secondNumber += num;
    }

    // Flash animation
    displayBox.style.backgroundColor = "#ffffcc";
    setTimeout(function() {
        displayBox.style.backgroundColor = "#ffffff";
    }, 150);
}

// Function to choose operator
function chooseOperator(op) {
    if (firstNumber === '') return;
    if (secondNumber !== '') {
        calculate();
        firstNumber = displayBox.value;
        secondNumber = '';
    }

    operator = op;
    displayBox.value += ' ' + op + ' ';
}

// Function to clear display
function clearDisplay() {
    displayBox.value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    isResultShown = false;

    displayBox.style.backgroundColor = "#ffcccc";
    setTimeout(function() {
        displayBox.style.backgroundColor = "#ffffff";
    }, 150);
}

// Function to calculate result
function calculate() {
    if (firstNumber === '' || operator === '' || secondNumber === '') {
        displayBox.value = 'Error';
        return;
    }

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result = 0;

    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') {
        if (num2 === 0) {
            displayBox.value = "Cannot divide by zero";
            displayBox.style.backgroundColor = "#ffcccc";
            setTimeout(() => displayBox.style.backgroundColor = "#ffffff", 200);
            return;
        }
        result = num1 / num2;
    }

    displayBox.value = result;
    isResultShown = true;

    displayBox.style.backgroundColor = "#ccffcc";
    setTimeout(() => displayBox.style.backgroundColor = "#ffffff", 200);
}
