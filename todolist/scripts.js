document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            removeTask(e.target.parentElement);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const span = document.createElement('span');
        span.className = 'task-text';
        span.appendChild(document.createTextNode(task));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.appendChild(document.createTextNode('Delete'));
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    }

    function removeTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
