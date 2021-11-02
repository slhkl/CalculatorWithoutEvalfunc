const display = document.getElementById("display-screen");
const oldDisplay = document.getElementById("old-display");
var displayStr = "";
let result;
let array;
let stopIt = false;
display.value = "0";

display.addEventListener("keydown", function (event) {
    if (event.key == "%" || event.key == "/" || event.key == "-" || event.key == "+" || event.key == "*") {
        Calculator(event.key.toString())
    } 
    else if(event.key % 1 ==0 || event.key==".") {
        AddNumber(event.key.toString())
    } 
    else if(event.key == "=" || event.keyCode==13) {
        Result();
    }
    else if(event.keyCode==8) {
        if (displayStr.slice(-1) == "%" || displayStr.slice(-1) == "*" || displayStr.slice(-1) == "/" || displayStr.slice(-1) == "+" || displayStr.slice(-1) == "-") {
            stopIt=false;
        }
        displayStr=displayStr.slice(0,-1);
    }
})
display.addEventListener("keyup", function() {
    display.value=displayStr;
})
function AddNumber(element) {
    if(displayStr.slice(-1)=="." && element==".") {

    } else {
    displayStr += element.toString();
    display.value = displayStr;   
    }
}

function DeleteAll() {
    displayStr = "";
    display.value = "0";
    oldDisplay.innerHTML = "";
    result = "";
    stopIt = false;
}

function Calculator(element) {
    displayStr = displayStr.toString();
    if (displayStr == "") { }
    else if(displayStr.slice(-1) == "%" || displayStr.slice(-1) == "*" || displayStr.slice(-1) == "/" || displayStr.slice(-1) == "+" || displayStr.slice(-1) == "-")  {
        displayStr = displayStr.slice(0,-1);
        displayStr+=element;
        display.value=displayStr;
    }
    else if (stopIt) { }
    else if (displayStr.slice(-1) != "%" && displayStr.slice(-1) != "*" && displayStr.slice(-1) != "/" && displayStr.slice(-1) != "+" && displayStr.slice(-1) != "-") {
        displayStr += element;
        display.value = displayStr;
        stopIt = true;
    }
}

function Result() {
    if (displayStr == "") {
        display.value = 0;
    }
    else if (display.value == result) {
        return;
    }
    else if (displayStr.includes("+")) {
        array = displayStr.split("+");
        result = parseFloat(array[0]) + parseFloat(array[1])
        oldDisplay.innerHTML = displayStr;
        displayStr = result;
        display.value = displayStr;
        stopIt = false;
    }
    else if (displayStr.includes("*")) {
        array = displayStr.split("*");
        result = parseFloat(array[0]) * parseFloat(array[1])
        oldDisplay.innerHTML = displayStr;
        displayStr = result;
        display.value = displayStr;
        stopIt = false;
    }
    else if (displayStr.includes("/")) {
        array = displayStr.split("/");
        result = parseFloat(array[0]) / parseFloat(array[1])
        oldDisplay.innerHTML = displayStr;
        displayStr = result;
        display.value = displayStr;
        stopIt = false;
    }
    else if (displayStr.includes("%")) {
        array = displayStr.split("%");
        result = parseFloat(array[0]) % parseFloat(array[1])
        oldDisplay.innerHTML = displayStr;
        displayStr = result;
        display.value = displayStr;
        stopIt = false;
    }
    else if (displayStr.includes("-")) {
        array = displayStr.split("-");
        result = parseFloat(array[0]) - parseFloat(array[1])
        oldDisplay.innerHTML = displayStr;
        displayStr = result;
        display.value = displayStr;
        stopIt = false;
    }
}