let number0 = document.getElementById("btn0");
let number1 = document.getElementById("btn1");
let number2 = document.getElementById("btn2");
let number3 = document.getElementById("btn3");
let number4 = document.getElementById("btn4");
let number5 = document.getElementById("btn5");
let number6 = document.getElementById("btn6");
let number7 = document.getElementById("btn7");
let number8 = document.getElementById("btn8");
let number9 = document.getElementById("btn9");
let SToD = document.getElementById("S/D");
let DToS = document.getElementById("D/S");
let EToS = document.getElementById("E/S");
let SToE = document.getElementById("S/E");
let clear = document.getElementById("clear");
let add = document.getElementById("btn+");
let subtract = document.getElementById("btn-");
let divide = document.getElementById("btn/");
let multiple = document.getElementById("btnX");
let inputScreen = document.getElementById("input-p");


number0.addEventListener("click", function() {
    addOnScreen(0);
})
number1.addEventListener("click", function() {
    addOnScreen(1);
})
number2.addEventListener("click", function() {
    addOnScreen(2);
})
number3.addEventListener("click", function() {
    addOnScreen(3);
})
number4.addEventListener("click", function() {
    addOnScreen(4);
})
number5.addEventListener("click", function() {
    addOnScreen(5);
})

number6.addEventListener("click", function() {
    addOnScreen(6);
})
number7.addEventListener("click", function() {
    addOnScreen(7);
})
number8.addEventListener("click", function() {
    addOnScreen(8);
})
number9.addEventListener("click", function() {
    addOnScreen(9);
})

add.addEventListener("click", function() {
    addOnScreen("+");
})
subtract.addEventListener("click", function() {
    addOnScreen("-");
})
multiple.addEventListener("click", function() {
    addOnScreen("X");
})
divide.addEventListener("click", function() {
    addOnScreen("/");
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