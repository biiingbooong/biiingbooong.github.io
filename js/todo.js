const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const LOCAL_TODOS = "todos"

function saveTodos() {
    //localStorage.setItem("todos", todos);
    localStorage.setItem(LOCAL_TODOS, JSON.stringify(todos));
}

function deleteTodos() {
    localStorage.removeItem(LOCAL_TODOS,  )

}

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value;
    console.log(newTodo);
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo + " ",
        id: Date.now(),
    };

    paintTodo(newTodoObj);
    todos.push(newTodoObj);
    saveTodos();
}

function handleDeleteBtn(event) {
    const li = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos(); 
    li.remove();
}
function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", handleDeleteBtn);
    li.appendChild(deleteBtn);
    li.classList.add("todo-item");

    todoList.appendChild(li);
}

const localTodos = localStorage.getItem(LOCAL_TODOS);
// JSON.parse(localStorage.getItem(LOCAL_TODOS));
if (localTodos) {
    const parsedTodos = JSON.parse(localTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
    /*
    parsedTodos.forEach((element) => {
       paintTodo(element);
    });
    */
}
todoForm.addEventListener("submit", handleTodoSubmit);