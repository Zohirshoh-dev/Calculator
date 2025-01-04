let display = "0";
let lastInput = "";
const displayElement = document.getElementById("display");

function clearDisplay() {
  display = "0";
  lastInput = "";
  updateDisplay();
}

function appendToDisplay(value) {
  if (display === "0" && value !== ".") {
    display = value;
  } else {
    display += value;
  }
  lastInput = value;
  updateDisplay();
}

function appendOperator(operator) {
  if (!isOperator(lastInput)) {
    display += operator;
    lastInput = operator;
    updateDisplay();
  }
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

function calculateResult() {
  try {
    display = eval(display).toString();
  } catch (error) {
    display = "Error";
  }
  lastInput = "";
  updateDisplay();
}

function deleteLast() {
  if (display.length > 1) {
    display = display.slice(0, -1);
  } else {
    display = "0";
  }
  lastInput = display[display.length - 1] || "";
  updateDisplay();
}

function updateDisplay() {
  displayElement.textContent = display;
}
