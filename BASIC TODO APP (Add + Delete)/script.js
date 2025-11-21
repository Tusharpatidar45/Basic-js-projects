const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo() {
  let text = input.value.trim();

  if (text === "") return;

  const todo = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  todos.push(todo);
  saveTodos();
  input.value = "";
  renderTodos();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", (elem) => {
  if (elem.key === "Enter") {
    addTodo();
  }
});

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

function toggleComplete(id) {
  todos = todos.map((todo) => {
    return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
  });

  saveTodos();
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleComplete(todo.id));

    const span = document.createElement("span");
    span.textContent = todo.text;
    if (todo.completed) {
      span.classList.add("completed");
    }

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    todoList.appendChild(li);
  });
}
renderTodos();
