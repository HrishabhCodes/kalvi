const inputElement = document.getElementById("num");
const displayBtn = document.querySelector(".display-btn");
const tableBox = document.querySelector(".table");

displayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (tableBox.hasChildNodes()) {
    for (let i = 1; i <= 10; i++) {
      tableBox.removeChild(tableBox.firstElementChild);
    }
  }
  const number = parseInt(inputElement.value);
  if (!number) {
    alert("Enter a number!");
    return;
  }
  for (let i = 1; i <= 10; i++) {
    const tableElement = document.createElement("div");
    tableElement.classList.add("table-element");
    const element = document.createElement("p");
    element.innerText = `${number} x ${i} = ${number * i}`;
    tableElement.appendChild(element);
    tableBox.appendChild(tableElement);
  }
});
