let currentValue = "";
document.querySelector("#screen").value = currentValue;

function insertOne() {
    currentValue += '1';
    document.querySelector("#screen").value = currentValue;
}

function insertTwo() {
    currentValue += '2';
    document.querySelector("#screen").value = currentValue;
}

function insertThree() {
    currentValue += '3';
    document.querySelector("#screen").value = currentValue;
}

function insertFour() {
    currentValue += '4';
    document.querySelector("#screen").value = currentValue;
}

function insertFive() {
    currentValue += '5';
    document.querySelector("#screen").value = currentValue;
}

function insertSix() {
    currentValue += '6';
    document.querySelector("#screen").value = currentValue;
}

function insertSeven() {
    currentValue += '7';
    document.querySelector("#screen").value = currentValue;
}

function insertEight() {
    currentValue += '8';
    document.querySelector("#screen").value = currentValue;
}

function insertNine() {
    currentValue += '9';
    document.querySelector("#screen").value = currentValue;
}

function insertZero() {
    currentValue += '0';
    document.querySelector("#screen").value = currentValue;
}

function add() {
    currentValue += '+';
    document.querySelector("#screen").value = currentValue;
}

function subtract() {
    currentValue += '-';
    document.querySelector("#screen").value = currentValue;
}

function divide() {
    currentValue += '/';
    document.querySelector("#screen").value = currentValue;
}

function multiply() {
    currentValue += '*';
    document.querySelector("#screen").value = currentValue;
}



function clear() {
    currentValue = '';
    document.querySelector("#screen").value = currentValue;
}
document.getElementById('clear').addEventListener('click', clear);

function calculate() {
    currentValue = eval(currentValue);
    document.querySelector("#screen").value = currentValue;
}
