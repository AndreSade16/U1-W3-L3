const input = document.getElementById("text-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");
const removeBtns = document.querySelectorAll(".remove-task-btn");
const checkboxes = document.querySelectorAll(".checkbox");
const form = document.querySelector("form");
const icon = document.getElementById("ciao");

const appendNewTask = (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("Inserisci del testo");
    return;
  }
  const newTask = document.createElement("div");
  newTask.classList.add("task-container");
  newTask.innerHTML = `
    <input type="checkbox" class="checkbox" onchange="lineThrough(event)"/>
    <p class="task-p">${input.value}</p>
    <button class="remove-task-btn" onclick="removeTask(event)"><i id="ciao" class="fas fa-trash icon""></i></button>
    `;
  listContainer.appendChild(newTask);
  form.reset();
};

const removeTask = (e) => {
  e.target.parentElement.remove();
};

const lineThrough = (e) => {
  e.target.parentElement.classList.toggle("checked");
};

addBtn.addEventListener("click", appendNewTask);
