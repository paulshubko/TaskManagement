let button = document.getElementById('create_task');
let ul = document.getElementById('task_list');
let output = document.getElementsByName('out');
let total = document.getElementById('total');

button.addEventListener("click", addTask);

function addTask() {
  let checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("task-checkbox");
  
  let label = document.createElement("LABEL");
  let li = document.createElement("LI");
  let task = document.createTextNode(document.getElementById('input_task').value);
  label.appendChild(task);
  li.appendChild(checkbox);
  li.appendChild(label);
  
  let deleteButton = document.createElement('button');
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", deleteTask);
  
  li.appendChild(deleteButton);
  ul.appendChild(li);
  
  total.textContent = +total.textContent + 1;
}

function deleteTask(event) {
  let li = event.target.parentElement;
  li.remove();
  
  total.textContent = +total.textContent - 1;
}
