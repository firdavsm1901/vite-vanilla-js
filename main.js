import './style.css'
import { addTask } from './src/addTask';

document.querySelector('#app').innerHTML = `
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter task">
    <button id="submit-button">Add Task</button>
    <ul id="taskList"></ul>
`;

// addTask(document.querySelector('#submit-button'));

document.querySelector('#submit-button').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';


        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                listItem.childNodes[1].classList.add('completed');
            } else {
                listItem.childNodes[1].classList.remove('completed');
            }
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = '';

    }
});
