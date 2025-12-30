const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.innerText = inputBox.value;

  let editBtn = document.createElement("span");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = "✏️";

  let deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "\u00d7";

  li.appendChild(taskText);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  listcontainer.appendChild(li);

  inputBox.value = "";
  saveData();
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("task-text")) {
    e.target.parentElement.classList.toggle("checked");
  }

  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("edit-btn")) {
    let textSpan = e.target.parentElement.querySelector(".task-text");
    let newText = prompt("Edit your task", textSpan.innerText);

    if (newText !== null && newText.trim() !== "") {
      textSpan.innerText = newText;
    }
  }

  saveData();
});

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
