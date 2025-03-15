// Sélectionne l'élément <input> où l'utilisateur entre la tâche
const inputTask = document.getElementById("inputTask");
// Sélectionne le bouton "Add Task"
const addBtn = document.getElementById("addBtn");
// Sélectionne la liste <ul> où les tâches seront affichées
const tasksList = document.getElementById("tasksList");


// Ajoute un écouteur d'événement au bouton "Add Task" pour détecter les clics
addBtn.addEventListener('click', addTask);


// Fonction qui ajoute une tâche à la liste
function addTask() {
    // Récupère la valeur de l'input et supprime les espaces inutiles (début et fin)
    const taskText = inputTask.value.trim();
    // Vérifie si l'input n'est pas vide
    if (taskText !== "") {
        // Crée un nouvel élément <li> pour afficher la tâche
        const li = document.createElement("li");
        // Définit le texte de l'élément <li> avec la valeur de l'input
        li.textContent = taskText;
        // Ajoute l'élément <li> à la liste <ul> (affichage de la tâche)
        tasksList.appendChild(li);
        // Réinitialise l'input pour le vider après l'ajout de la tâche
        inputTask.value = '';
    }
}
