/*
calculator needs
  clear functionality
  storage for currNum
  storage for prevNum
  math functionality
  compliance between DOM and JS
steps:
user press buttons to input numbers
once an operator is pressed the number is saved as prevNum
the input box is then cleared and user is prompted to input another number
once the user inputs the second number and press '=' button, its saved as currNum
the '=' will have an eventListener doing the math operations with prevNum & currNum as args
the math operations functionality:
  the function checks input storage for specific operator in array
  once found it, does the math in prevNum (operator) currNum
  return answer in INPUT_BOX.textContent

JS Stuff for calculator
  when operator is clicked it should store prevNumber
  when '=' is clicked it stores currentNum runs math function
  storage for digit and operator buttons
  function for operators
  math function needs to take two args: currentNum, prevNum
DOM Stuff for calculator
  storage for input
  need eventListener to push user's input to input array
  need eventListener for '=' button to callback math function
*/
//storage for input
let input = [];

//Calculator operations
function clearInput() {
  return (input = []);
}
function getSum(num1, num2) {
  return num1 + num2;
}
function getDifference(num1, num2) {
  return num1 - num2;
}
function getProduct(num1, num2) {
  return num1 * num2;
}
function getQuotent(num1, num2) {
  return num1 / num2;
}
//Getting Calculator Answer
function getMathAns(num1, num2) {
  if (input.includes("+")) {
    return getSum(num1, num2);
  }
  if (input.includes("-")) {
    return getDifference(num1, num2);
  }
  if (input.includes("*")) {
    return getProduct(num1, num2);
  }
  if (input.includes("/")) {
    return getQuotent(num1, num2);
  }
}
//storage for digits and operator buttons
const DIGITS_OPERATORS = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "-",
  "+",
  "*",
  "/",
  "c",
];

//DOM elements
const CALCULATOR = document.createElement("div");
const INPUT_BOX = document.createElement("div");

//storage for prevNum and currNum
let prevNum = INPUT_BOX.textContent;
let currNum = INPUT_BOX.textContent;

//DOM classes
CALCULATOR.className = "calculator-body";
INPUT_BOX.className = "calculator-inputbox";
CALCULATOR.appendChild(INPUT_BOX);

//Assigning each button an input
for (let i = 0; i < DIGITS_OPERATORS.length; i++) {
  const BUTTON = document.createElement("button");
  BUTTON.textContent = DIGITS_OPERATORS[i];
  if (typeof DIGITS_OPERATORS[i] === "number") {
    BUTTON.className = "digit-btn";
  } else {
    BUTTON.className = "operator-btn";
  }
  CALCULATOR.appendChild(BUTTON);
}

//Appending elements
document.body.appendChild(CALCULATOR);
