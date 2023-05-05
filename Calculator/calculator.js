// Get references to DOM elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let operand1 = "";
let operand2 = "";
let operator = "";
let result = null;

// Helper function to update display
function updateDisplay(value) {
  display.innerText = value;
}

// Helper function to perform calculation
function calculate() {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  // Update display with result
  updateDisplay(result);

  // Reset operands and operator for next calculation
  operand1 = result.toString();
  operand2 = "";
  operator = "";
}

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    // Clear display
    if (buttonText === "C") {
      operand1 = "";
      operand2 = "";
      operator = "";
      result = null;
      updateDisplay("0");
    }
    // Handle operators
    else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      operator = buttonText;
      operand1 = display.innerText;
      operand2 = "";
      updateDisplay("0");
    }
    // Handle decimal point
    else if (buttonText === ".") {
      if (!display.innerText.includes(".")) {
        updateDisplay(display.innerText + ".");
      }
    }
    // Handle equals sign
    else if (buttonText === "=") {
      operand2 = display.innerText;
      calculate();
    }
    // Handle numbers
    else {
      if (operator === "") {
        operand1 += buttonText;
        updateDisplay(operand1);
      } else {
        operand2 += buttonText;
        updateDisplay(operand2);
      }
    }
  });
});
