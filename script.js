const display = document.getElementById("display-screen");
var displayScreen = "";
var displayStr = "";
var displayArr = [];
let i = 0;
let result;
let operator;
let isOpEnough = true;
let stopIt = true;

function AddNumber(element) {
    displayStr += element.toString();
    displayScreen = displayScreen.concat(element);
    display.innerHTML = displayScreen;
}

function DeleteAll() {
    displayStr = displayStr.replace(displayStr, "");
    displayScreen = displayScreen.replace(displayScreen, "");
    displayArr = [];
    i = 0;
    display.innerHTML = "0";
    isOpEnough = true;
    stopIt = false;
}

function Calculator(element) {
    if (displayScreen.slice(-1) == "%" || displayScreen.slice(-1) == "*" || displayScreen.slice(-1) == "/" || displayScreen.slice(-1) == "+" || displayScreen.slice(-1) == "-") {
        if (element == "-" && stopIt) {
            stopIt = false;
            displayStr += element;
            displayScreen = displayScreen.concat(element)
            display.innerHTML = displayScreen;
        }
    } else if (element == "-" && displayStr.length < 1) {
        displayStr += element;
        displayScreen = displayScreen.concat(element)
        display.innerHTML = displayScreen;
    } else if (displayScreen == "") { }

    else if (isOpEnough) {
        displayArr[i] = displayStr;
        i += 1;
        displayStr = displayStr.replace(displayStr, "");
        displayArr[i] = element;
        i += 1;
        displayScreen = displayScreen.concat(element)
        display.innerHTML = displayScreen;
        isOpEnough = false;
    }
}

function Result() {
    displayArr[i] = displayStr;
    displayStr = displayStr.replace(displayStr, "");

    if (displayArr.indexOf("%") >= 0) {
        operator = displayArr.indexOf("%");
    } else if (displayArr.indexOf("/") >= 0) {
        operator = displayArr.indexOf("/");
    } else if (displayArr.indexOf("*") >= 0) {
        operator = displayArr.indexOf("*");
    } else if (displayArr.indexOf("+") >= 0) {
        operator = displayArr.indexOf("+");
    } else if (displayArr.indexOf("-") >= 0) {
        operator = displayArr.indexOf("-");
    }
    displayArr[operator - 1] = parseFloat(displayArr[operator - 1]);
    displayArr[operator + 1] = parseFloat(displayArr[operator + 1]);

    switch (displayArr[operator]) {
        case "%":
            result = displayArr[operator - 1] % displayArr[operator + 1];
            break;
        case "/":
            result = displayArr[operator - 1] / displayArr[operator + 1];
            break;
        case "*":
            result = displayArr[operator - 1] * displayArr[operator + 1];
            break;
        case "+":
            result = displayArr[operator - 1] + displayArr[operator + 1];
            break;
        case "-":
            result = displayArr[operator - 1] - displayArr[operator + 1];
            break;
        default:
            result;
    }
    displayArr = [];
    i = 0;
    displayScreen = displayScreen.concat("=", result);
    display.innerHTML = displayScreen;
    displayScreen = displayScreen.replace(displayScreen, "");
    isOpEnough = true;
    stopIt = true;
}