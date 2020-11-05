let numberButtons = document.querySelectorAll('.btn');
let SToD = document.getElementById("S/D");
let DToS = document.getElementById("D/S");
let EToS = document.getElementById("E/S");
let SToE = document.getElementById("S/E");
let clear = document.getElementById("clear");
let inputScreen = document.getElementById("input-p");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        addOnScreen(button.innerText);

    })
})

clear.addEventListener("click", function() {
    inputScreen.innerHTML = 0;
})

SToD.addEventListener("click", function() {
    let currency = inputScreen.innerText;
    currency = currency / 3.37703;
    inputScreen.innerText = currency;
})
DToS.addEventListener("click", function() {
    let currency = inputScreen.innerText;
    currency = currency * 3.37703;
    inputScreen.innerText = currency;
})
EToS.addEventListener("click", function() {
    let currency = inputScreen.innerText;
    currency = currency * 3.99212;
    inputScreen.innerText = currency;
})
SToE.addEventListener("click", function() {
    let currency = inputScreen.innerText;
    currency = currency / 3.99212;
    inputScreen.innerText = currency;
})

function addOnScreen(number) {
    if (inputScreen.innerText == 0) {
        inputScreen.innerText = "";
    }

    inputScreen.innerText = inputScreen.innerText + number;

}