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
let currentOperator = null;
let currentAnswer = null;

//Calculator operations
function clearInput() {
  return (INPUT_TEXT.textContent = "");
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
function getMathAns(nums, operator) {
  if (operator.includes("+")) {
    return (INPUT_TEXT.textContent = getSum(Number(nums[0]), Number(nums[1])));
  }
  if (operator.includes("-")) {
    return (INPUT_TEXT.textContent = getDifference(
      Number(nums[0]),
      Number(nums[1])
    ));
  }
  if (operator.includes("*")) {
    return (INPUT_TEXT.textContent = getProduct(
      Number(nums[0]),
      Number(nums[1])
    ));
  }
  if (operator.includes("/")) {
    return (INPUT_TEXT.textContent = getQuotent(
      Number(nums[0]),
      Number(nums[1])
    ));
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
  "=",
];
const OPERATOR = ["-", "+", "*", "/", "c"];

//DOM elements
const CALCULATOR = document.createElement("div");
const INPUT_BOX = document.createElement("div");
const BUTTON_DIV = document.createElement("div");
const INPUT_TEXT = document.createElement("p");

//storage for prevNum and currNum
let prevNum = INPUT_TEXT.textContent;
let currNum = INPUT_TEXT.textContent;

//Appending elements
document.body.appendChild(CALCULATOR);
CALCULATOR.appendChild(INPUT_BOX);
CALCULATOR.appendChild(BUTTON_DIV);
INPUT_BOX.appendChild(INPUT_TEXT);

//DOM classes
CALCULATOR.className = "calculator-body";
INPUT_BOX.className = "calculator-inputbox";
INPUT_TEXT.className = "calculator-text";
BUTTON_DIV.className = "calculator-btnDiv";

//Assigning each button an input
for (let i = 0; i < DIGITS_OPERATORS.length; i++) {
  const BUTTON = document.createElement("button");
  BUTTON.textContent = DIGITS_OPERATORS[i];
  if (typeof DIGITS_OPERATORS[i] === "number") {
    BUTTON.className = "digit-btn";
  } else {
    BUTTON.className = "operator-btn";
  }
  BUTTON_DIV.appendChild(BUTTON);
}
//adding eventListeners
CALCULATOR.addEventListener("click", (e) => {
  //clears previous answer from text-box
  if (currentAnswer) {
    currentAnswer = null;
    clearInput();
    return;
  }

  INPUT_TEXT.textContent += e.target.textContent;

  if (e.target.textContent === "c") {
    clearInput();
  }
  if (e.target.textContent === "=") {
    //checks for operator in input
    for (let op of OPERATOR) {
      if (INPUT_TEXT.textContent.includes(op)) {
        currentOperator = op;
        break;
      }
    }
    input = INPUT_TEXT.textContent
      .slice(0, INPUT_TEXT.textContent.length - 1)
      .split(currentOperator);
    clearInput();
    currentAnswer = getMathAns(input, currentOperator);
  }
});

const CLOSE_PARENT = document.createElement("section");
CLOSE_PARENT.className = "parent";

for (let i = 0; i < 3; i++) {
  const CLOSE_BUTTON = document.createElement("button");
  CLOSE_BUTTON.className = "child";
  CLOSE_BUTTON.textContent = "X";
  CLOSE_PARENT.appendChild(CLOSE_BUTTON);
}

document.body.appendChild(CLOSE_PARENT);

CLOSE_PARENT.addEventListener("click", (e) => {
  e.target.textContent = "HOW IS THIS WORKING";
});
