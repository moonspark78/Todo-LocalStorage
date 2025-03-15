const inputTask = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn")
const tasksList = document.getElementById("tasksList")

// Événements pour le bouton et l'input
addBtn.addEventListener('click', addTask);


function addTask() {
    const taskText = inputTask.value.trim();
    if (taskText !== ""){
        const li = document.createElement("li");
        li.textContent = taskText;
        tasksList.appendChild(li);
        inputTask.value = '';
    }
};

