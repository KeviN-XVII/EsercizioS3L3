const form = document.getElementById("task-form");
// funzione per eliminare il task
const deleteTask = function (event) {
  event.target.parentElement.remove();
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value;

  if (taskValue === "") return; // non aggiungere task vuoti

  // creiamo una card con li e bottone
  const card = document.createElement("div");
  card.classList.add("task-card");
  card.innerHTML = `
  <li class="task-item"><span class="task-text">${taskValue}</span>
  <i class="fas fa-trash-alt" onclick="deleteTask(event)"></i>
    </li>
  `;

  const container = document.getElementById("taskList");
  container.appendChild(card);

  const taskText = card.querySelector(".task-text");
  taskText.addEventListener("click", function () {
    taskText.classList.toggle("completed");
  });

  form.reset();
});
