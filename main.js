import './style.css'
import { addTask } from '../../src/addTask';

document.querySelector('#app').innerHTML = `
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter task">
    <button id="submit-button">Add Task</button>
    <ul id="taskList"></ul>
`;

addTask(document.querySelector('#submit-button'));