const tasks = document.getElementById("tasks");

class Task {
  constructor(id, name, category, status = false) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.status = status;
  }
}

let addNewTask = document.getElementById("taskForm");
addNewTask.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let category = document.getElementsByName("category");
  let selectedCategory = Array.from(category).find(
    (element) => element.checked
  );

  if (name.value == "" || !selectedCategory) {
    alert("Please give a name or select a category!");
  } else {
    //alert("Saved!");

    let task = new Task(generateRandomId(), name.value, selectedCategory.value);
    // todoList.push(task);
    displayNewTask(task);

    name.value = "";
    selectedCategory.checked = false;
  }
});

function generateRandomId() {
  let randomID = "";

  for (let i = 0; i < 5; i++) {
    randomID += Math.floor(Math.random() * 10);
  }
  return randomID;
}

function displayNewTask(task) {
  let newTask = `<div class="task task-single" data-id="${task.id}">
          <div class="task-single__info-box">
            <span class="task__category task__category--${task.category}" onclick="doneTask('${task.id}')"></span>
            <input type="text" class="task__name" name="task__name" value="${task.name}" readonly>
          </div>
          <div class="task-single__button-box">
            <button class="task__button task__button--edit" onclick="editTask('${task.id}')">Edit</button>
            <button class="task__button task__button--delete" onclick="deleteTask('${task.id}')">Delete</button>
          </div>    
          
        </div>`;
  tasks.insertAdjacentHTML("beforeend", newTask);
}

function doneTask(id) {
  document.querySelector(`.task-single[data-id="${id}"]`).classList.add("done");
}

function editTask(id) {
  let inputName = document.querySelector(
    `.task-single[data-id="${id}"] input.task__name`
  );
  inputName.readOnly = false;

  inputName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      // todoList.find();
      inputName.readOnly = true;
    }
  });
}

function deleteTask(id) {
  // let isNotThisId = (elem) => elem.id !== id;
  // todoList = todoList.filter(isNotThisId);
  document.querySelector(`.task-single[data-id="${id}"]`).remove();
}
