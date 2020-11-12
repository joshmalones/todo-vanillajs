// Selector

const todoInput = document.querySelector(".todoList__input");
const todoButton = document.querySelector(".todoList__button");
const TodoList = document.querySelector(".todoList__list");

// Event Listener
todoButton.addEventListener("click", (event) => {
  //Prevent from loading
  event.preventDefault();
});
