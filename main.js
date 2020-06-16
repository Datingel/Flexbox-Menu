//Selectors
const createProjectBtn = document.querySelector(".create-project");
const projectList = document.querySelector(".project-list");
const addTaskBtn = document.querySelector(".add-task");
const checklist = document.querySelector(".checklist");

//Event Listeners
createProjectBtn.addEventListener("click", addProject);
addTaskBtn.addEventListener("click", addTask);

//Functions
function addProject(event) {
  console.log("Create Project");
}

function addTask() {
  console.log("clicked");
  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("checkbox");

  const newCheckbox = document.createElement("input");
  newCheckbox.classList.add("input-task");
  newCheckbox.setAttribute("type", "checkbox");
  newTaskDiv.appendChild(newCheckbox);

  const newLabel = document.createElement("label");
  newLabel.innerText = "Test";
  newTaskDiv.appendChild(newLabel);

  checklist.appendChild(newTaskDiv);
}
