const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector(".operator");
const answer = document.querySelector(".answer");
const calculate = document.querySelector(".calculate");
let operation = "add";
let num1Value;
let num2Value;

const refactorNumbers = () => {
  if (num1.value.includes(".")) {
    num1Value = parseFloat(num1.value);
  } else {
    num1Value = parseInt(num1.value);
  }

  if (num2.value.includes(".")) {
    num2Value = parseFloat(num2.value);
  } else {
    num2Value = parseInt(num2.value);
  }
};

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
  refactorNumbers();
  if (operation === "add") {
    answer.innerText = (num1Value + num2Value).toFixed(2);
  } else if (operation === "subtract") {
    answer.innerText = (num1Value - num2Value).toFixed(2);
  } else if (operation === "multiply") {
    answer.innerText = (num1Value * num2Value).toFixed(2);
  } else if (operation === "divide") {
    answer.innerText = (num1Value / num2Value).toFixed(2);
  }
});
