
export function addTask(element) {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    element.addEventListener('click', () => {
        const listItem = document.createElement('li');
        listItem.innerText = taskInput.value;
        taskList.appendChild(listItem);
        taskInput.value = '';
    });
}
  