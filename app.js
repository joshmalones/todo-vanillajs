// Selector

const todoInput = document.querySelector(".todoList__input");
const todoButton = document.querySelector(".todoList__button");
const todoList = document.querySelector(".todoList");

// Event Listener
todoButton.addEventListener("click", (event) => {
  // Prevent from loading
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = "Todo";
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
  todoDiv.appendChild(deleteButton);
  // Append to list
  todoList.appendChild(todoDiv);
});
