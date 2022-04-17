//Variables
let form = document.getElementById("submit-form");
let submit = document.getElementById("submit");
let delBtn = document.querySelectorAll(".del-btn");
let delAll = document.getElementById("delete");
let itemList = document.getElementById("ul");

//Event Listeners
form.addEventListener("submit", addItem);
document.body.addEventListener("click", deleteItem);
delAll.addEventListener("click", kill);

//Functions

function addItem(e) {
  //Default
  e.preventDefault();

  //Variables
  let newItemValue = document.getElementById("text").value;

  //Check if string is empty. If empty, stop the function
  if (!newItemValue.match(/([A-Za-z0-9])/)) {
    return false;
  }

  //transform input
  let itemList = document.getElementById("ul");
  itemList.innerHTML += `<li><p>${newItemValue}</p><button class="del-btn">X</button></li>`

  //Clear Input
  document.getElementById("text").value = "";
}

function deleteItem(e) {
  if (e.target.className !== "del-btn") {
    return false;
  }
  let li = e.target.parentElement;
  itemList.removeChild(li);
}

function kill(e) {
  itemList.textContent = "";
}
