const inputElement = document.getElementById("num");
// Step 10: Store the reference of display button into a variable called displayBtn
const displayBtn = document.querySelector(".display-btn");
const tableBox = document.querySelector(".table");

// Step 11: Add the appropriate event listener to the display button in place of "X"
displayBtn.addEventListener("click", display);

// Step 12: Define the function that is called when the display button is clicked separately and
// name it as "display"
function display(e) {
  e.preventDefault();
  if (tableBox.hasChildNodes()) {
    for (let i = 1; i <= 10; i++) {
      tableBox.removeChild(tableBox.firstElementChild);
    }
  }
  const number = parseInt(inputElement.value);
  if (number != 0 && !number) {
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
}
