const inputTask = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

// Événements pour le bouton et l'input
addBtn.addEventListener('click', addTask);


function addTask() {
    const taskText = inputTask.value.trim();
    if (taskText !== ""){
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        inputTask.value = '';
    }
};

