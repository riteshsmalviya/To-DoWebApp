document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Done</button>
        `;
        taskList.appendChild(taskItem);

        const deleteButton = taskItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        taskInput.value = '';
    });
});
