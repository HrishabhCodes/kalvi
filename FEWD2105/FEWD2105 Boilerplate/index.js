const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector(".operator");
const answer = document.querySelector(".answer");
const calculate = document.querySelector(".calculate");
const incOne = document.querySelector(".inc-one");
const decOne = document.querySelector(".dec-one");
const incTwo = document.querySelector(".inc-two");
const decTwo = document.querySelector(".dec-two");
let operation = "add";
let numOne = 0;
let numTwo = 0;

incOne.addEventListener("click", (e) => {
  numOne = Number(num1.value);
  // Iteration 1: Increase numOne by 1 using increment operator

  num1.value = numOne;
});

decOne.addEventListener("click", (e) => {
  numOne = Number(num1.value);
  // Iteration 2: Decrease numOne by 1 using decrement operator

  num1.value = numOne;
});

incTwo.addEventListener("click", (e) => {
  numTwo = Number(num2.value);
  // Iteration 3: Increase numOne by 1 using an assignment operator

  num2.value = numTwo;
});

decTwo.addEventListener("click", (e) => {
  numTwo = Number(num2.value);
  // Iteration 4: Decrease numOne by 1 using an assignment operator

  num2.value = numTwo;
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator.innerText = "+";
  operation = "add";
});

subtractBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator.innerText = "-";
  operation = "subtract";
});

multiplyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator.innerText = "*";
  operation = "multiply";
});

divideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator.innerText = "/";
  operation = "divide";
});

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  let result;
  // Iteration 5: num1.value and num2.value are of type "String", convert their type to "Number" and
  // assign them to numOne and numTwo respectively


  // Iteration 6: Use correct comparison operator instead of "=" in all the following conditions
  // Iteration 7: Add appropriate arithmetic operators between numOne and numTwo in place of "X"
  if (operation = "add") {
    result = numOne "X" numTwo;
  } else if (operation = "subtract") {
    result = numOne "X" numTwo;
  } else if (operation = "multiply") {
    result = numOne "X" numTwo;
  } else if (operation = "divide") {
    result = numOne "X" numTwo;
  }

  // Iteration 8: Round the result to 2 decimal places
  answer.innerText = result;
});
