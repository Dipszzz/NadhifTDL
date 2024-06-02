document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(todoText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteButton);

        li.addEventListener('click', function() {
            if (!li.classList.contains('editing')) {
                li.classList.toggle('completed');
            }
        });

        todoList.appendChild(li);
    }
});
