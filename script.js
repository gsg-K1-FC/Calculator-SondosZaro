let numberButtons = document.querySelector('.sections');
const displayCalculator = {
    displayValue: '0',
    operator: null,
    firstNumber: null,
    secondNumber: null,

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


    if (!displayCalculator.firstNumber || !displayCalculator.secondNumber &&
        displayCalculator.operator && displayCalculator.operator !== "=") {
        alert("you should enter operation and two numbers")
        clearScreen();
        return
    }

    if (displayCalculator.operator) {

        const result = basicOperator(displayCalculator.firstNumber, displayCalculator.secondNumber, displayCalculator.operator)

        displayCalculator.displayValue = result;
        displayCalculator.firstNumber = result;
        displayCalculator.secondNumber = null;


        updateScreen();

    }

    displayCalculator.operator = operatorDigit;
}

function basicOperator(numberOne, numberTwo, operator) {
    let firstnumber = parseInt(numberOne);
    let secondnumber = parseInt(numberTwo);


    if (operator === '-') {

        return (firstnumber - secondnumber);
    } else if (operator === '+') {

        return firstnumber + secondnumber;
    } else if (operator === 'X') {

        return firstnumber * secondnumber;
    } else if (operator === '/') {
        if (secondnumber == 0) {
            alert("you can't divide by zero")
            clearScreen();
            return displayCalculator.displayValue;
        } else
            return firstnumber / secondnumber;
    }

    return displayCalculator.displayValue;
}



function inputDigit(number) {

    if (number.length === 1) {

        if (displayCalculator.operator && displayCalculator.firstNumber) {
            if (!displayCalculator.secondNumber) {
                displayCalculator.displayValue = number;
                displayCalculator.secondNumber = displayCalculator.displayValue;



            } else {
                displayCalculator.displayValue = displayCalculator.displayValue + number;
                displayCalculator.secondNumber = displayCalculator.displayValue;

            }
        } else {
            if (displayCalculator.displayValue === '0') {
                displayCalculator.displayValue = number;
                displayCalculator.firstNumber = displayCalculator.displayValue;

            } else {
                displayCalculator.displayValue = displayCalculator.displayValue + number;
                displayCalculator.firstNumber = displayCalculator.displayValue;

            }
        }
    }
}

function clearScreen() {
    displayCalculator.displayValue = '0';
    displayCalculator.operator = null;
    displayCalculator.firstNumber = null;
    displayCalculator.secondNumber = null;

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