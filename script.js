document.addEventListener("DOMContentLoaded", function() {
    let listContainer = document.getElementById("list-container");
    let inputBox = document.getElementById("input-box");

    // Load tasks from local storage when the page loads
    showData();

    function addTask() {
        if (inputBox.value === '') {
            alert("Add your Task");
        } else {
            let task = document.createElement('li');
            task.textContent = inputBox.value;
            listContainer.appendChild(task);
            let span = document.createElement('span');
            span.textContent = '\u00D7';
            task.appendChild(span);
            inputBox.value = ''; // Clear input box after adding task
            saveData();
        }
    }

    // Add event listener to the "Add Task" button
    document.getElementById("add-task-btn").addEventListener("click", addTask);

    // Add event listener to the list items for checking and deleting tasks
    listContainer.addEventListener("click", function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle("checked");
            saveData();
        } else if (event.target.tagName === 'SPAN') {
            event.target.parentElement.remove();
            saveData();
        }
    });

    function saveData() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }

    function showData() {
        let tasks = localStorage.getItem("tasks");
        if (tasks) {
            listContainer.innerHTML = tasks;
        }
    }
});
