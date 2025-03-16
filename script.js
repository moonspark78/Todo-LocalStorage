// Sélectionne l'élément <input> où l'utilisateur entre la tâche
const inputTask = document.getElementById("inputTask");
// Sélectionne le bouton "Add Task"
const addBtn = document.getElementById("addBtn");
// Sélectionne la liste <ul> où les tâches seront affichées
const tasksList = document.getElementById("tasksList");


// Ajoute un écouteur d'événement au bouton "Add Task" pour détecter les clics
addBtn.addEventListener('click', addTask);

function saveTasks(){
    const task = [];

    document.querySelectorAll('#tasksList li').forEach(li => {
        tasksList.push({
            text: li.querySelector('span').textContent,
            completed: li.querySelector('span').style.textDecoration === 'line-through'
        })
    })

    //sauvegarde dans local 
    
}


// Fonction qui ajoute une tâche à la liste
function addTask() {
    // Récupère la valeur de l'input et supprime les espaces inutiles (début et fin)
    const taskText = inputTask.value.trim();
    // Vérifie si l'input n'est pas vide
    if (taskText !== "") {
        // Crée un nouvel élément <li> pour afficher la tâche
        const li = document.createElement("li");
        // Définit le texte de l'élément <li> avec la valeur de l'input
        // Créer un span pour le texte de la tâche
        const span = document.createElement("span");
        span.textContent = taskText;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", function() {
            span.style.textDecoration = "line-through";
        });


        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            tasksList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);





        // Ajoute l'élément <li> à la liste <ul> (affichage de la tâche)
        tasksList.appendChild(li);
        // Réinitialise l'input pour le vider après l'ajout de la tâche
        inputTask.value = '';
    }
}
