// Sélectionne l'élément <input> où l'utilisateur entre la tâche
const inputTask = document.getElementById("inputTask");
// Sélectionne le bouton "Add Task"
const addBtn = document.getElementById("addBtn");
// Sélectionne la liste <ul> où les tâches seront affichées
const tasksList = document.getElementById("tasksList");


// Ajoute un écouteur d'événement au bouton "Add Task" pour détecter les clics
addBtn.addEventListener('click', addTask);

document.addEventListener('DOMContentLoaded', loadTasks);

function saveTasks(){
    const tasks = [];

    document.querySelectorAll('#tasksList li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').textContent,
            completed: li.querySelector('span').style.textDecoration === 'line-through'
        })
    })

    //sauvegarde dans local 
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Fonction pour charger les tâches
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        
        tasks.forEach(task => {
            // Utilise la fonction createTask pour éviter la répétition
            createTask(task.text, task.completed);
        });
    }
}


// Fonction qui crée une tâche (pour éviter la répétition de code)
function createTask(taskText, isCompleted = false) {
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = taskText;
    
    if (isCompleted) {
        span.style.textDecoration = "line-through";
    }

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function() {
        span.style.textDecoration = "line-through";
        saveTasks(); // Sauvegarde après modification
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
        const newText = prompt("Modifier la tâche:", span.textContent);
        if (newText && newText.trim() !== "") {
            span.textContent = newText;
            saveTasks(); // Sauvegarde après modification
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        tasksList.removeChild(li);
        saveTasks(); // Sauvegarde après suppression
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    tasksList.appendChild(li);
    
    return li;
}

function addTask() {
    const taskText = inputTask.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        inputTask.value = "";
        saveTasks(); // Sauvegarde après ajout
    }
}