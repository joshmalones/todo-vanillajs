// Selector

const todoInput = document.querySelector(".todoList__input");
const todoButton = document.querySelector(".todoList__button");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filter__todo");

// Event Listener
todoButton.addEventListener("click", (event) => {
  // Prevent from loading
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo__item");
  todoDiv.appendChild(newTodo);
  // Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed__btn");
  todoDiv.appendChild(completedButton);
  // deleted button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete__btn");
  deleteButton.delete = todoInput.value;
  todoDiv.appendChild(deleteButton);
  // Append to list
  todoList.appendChild(todoDiv);
  // Clear todo input value
  todoInput.value = "";
});

todoList.addEventListener("click", (event) => {
  const item = event.target;
  //Delete
  if (item.classList[0] === "delete__btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  //CheckMark
  if (item.classList[0] === "completed__btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
});

filterOption.addEventListener("click", (event) => {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
});
