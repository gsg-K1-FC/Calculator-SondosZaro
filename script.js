let numberButtons = document.querySelector('.sections');
const displayCalculator = {
    displayValue: '0',
    operator: null,
    firstNumber: null,
    WsecondNumber: false,

};
numberButtons.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains("btnO")) {
        forSecondNumber(target.innerText);

        updateScreen();
        return;
    } else
    if (target.classList.contains("btn-clear")) {

        clearScreen();
        updateScreen();
        return;
    } else if (target.classList.contains("btnC")) {
        convertCurrency(target.id);
        updateScreen();
        return;
    }

    inputDigit(target.innerText);

    updateScreen();

})

function forSecondNumber(operatorDigit) {
    let inputValue = displayCalculator.displayValue;

    if (displayCalculator.firstNumber == null && !isNaN(inputValue)) {
        displayCalculator.firstNumber = inputValue;
    } else
    if (displayCalculator.operator) {

        const result = basicOperator(displayCalculator.firstNumber, inputValue, displayCalculator.operator)

        displayCalculator.displayValue = String(result.toFixed(4));
        displayCalculator.firstNumber = result;
        updateScreen();

    }
    displayCalculator.WsecondNumber = true;
    displayCalculator.operator = operatorDigit;
}

function basicOperator(number, value, operator) {
    let firstnumber = parseInt(number);
    let secondnumber = parseInt(value);

    if (operator === '=' && displayCalculator.displayValue === '0.0000' || displayCalculator.displayValue === '0') {
        alert("you should enter operation and two numbers")

    } else
    if (operator === '-') {

        return (firstnumber - secondnumber);
    } else if (operator === '+') {

        return firstnumber + secondnumber;
    } else if (operator === 'X') {

        return firstnumber * secondnumber;
    } else if (operator === '/') {
        if (secondnumber == 0) {
            alert("you can't divide by zero")
            return firstnumber;
        } else
            return firstnumber / secondnumber;
    }
    return secondnumber;
}



function inputDigit(number) {
    if (displayCalculator.WsecondNumber === true) {
        displayCalculator.displayValue = number;
        displayCalculator.WsecondNumber = false;
    } else {
        if (displayCalculator.displayValue === '0')

            displayCalculator.displayValue = number;
        else {
            displayCalculator.displayValue = displayCalculator.displayValue + number;
        }
    }
}

function clearScreen() {
    displayCalculator.displayValue = '0';
    displayCalculator.operator = null;
    displayCalculator.firstNumber = null;
    displayCalculator.WsecondNumber = false;

}

function convertCurrency(id) {
    switch (id) {
        case 'E/S':
            displayCalculator.displayValue = (displayCalculator.displayValue * 3.99212).toFixed(4);
            break;
        case 'S/E':
            displayCalculator.displayValue = (displayCalculator.displayValue / 3.99212).toFixed(4)
            break;
        case 'S/D':
            displayCalculator.displayValue = (displayCalculator.displayValue / 3.37703).toFixed(4)
            break;
        case 'D/S':
            displayCalculator.displayValue = (displayCalculator.displayValue * 3.37703).toFixed(4);
            break;

    }
}

function updateScreen() {
    const input = document.querySelector('.first-section');
    input.value = displayCalculator.displayValue;

}
updateScreen();