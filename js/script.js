// Obtendo referências aos elementos HTML
const inputTask = document.getElementById("inputTask");
const listTask = document.getElementById("listTask");

function addTask() {
  // Verifica se o campo de tarefa está vazio
  if (inputTask.value === "") {
    alert("Não é possível salvar uma tarefa em branco!");
    return; // Retorna se estiver vazio para evitar a execução do restante do código
  }

  // Cria um novo elemento de lista
  const li = document.createElement("li");
  li.textContent = inputTask.value;
  listTask.appendChild(li);
  const span = document.createElement("span");
  span.textContent = "\u00d7";
  li.appendChild(span);
  inputTask.value = "";
}

// Verificação da "check box" de tarefa concluida
listTask.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
