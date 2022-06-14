showNotes();

// If user adds a note, add it to the local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
      <div class="noteCard mx-2 my-2 card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title" style="font-size: 24px">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <div class="details">
          <p class="total-length">No. of characters: ${element.length}</p>
        </div>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger" style="padding: 6px 12px">
          <i  style="font-size: 18px" class="delete fa-solid fa-trash-can"></i>
        </button>
        <button id="${index}" onclick="upNote(this.id)" class="uppercase btn btn-warning" style="padding: 6px 12px">
          Aa
        </button>
      </div>
    </div>
      `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// Uppercase vowels in the note
function upNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let arr = notesObj[index].split(" ");
  let temp = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  let newStr = temp.join(" ");
  notesObj[index] = newStr;
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// Function to Search in the app.
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
