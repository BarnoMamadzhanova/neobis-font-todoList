let todoList = [];

class Task {
  constructor(id, name, category) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}

// todoList.push(new Task(1, "1 Name", "cat"));
// console.log(todoList);

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
    alert("Saved!");
    todoList.push(
      new Task(generateRandomId(), name.value, selectedCategory.value)
    );

    displayNewTask();

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

function displayNewTask() {}

// Example usage
// console.log(generateRandomId());
