//Selectors
const createProjectBtn = document.querySelector(".create-project");
const projectList = document.querySelector(".project-list");
const addTaskBtn = document.querySelector(".add-task");
const checklist = document.querySelector(".checklist");
const addCollabBtn = document.querySelector(".add-collab");
const collabList = document.querySelector(".collab-container");
let counterTaskbar = document.querySelector(".counter");
console.log(counterTaskbar.innerText);
const inputCheckbox = document.querySelector(".input-task");
const inputCheckboxChecked =
  document.querySelector(".input-task:checked") !== null;

//Event Listeners
createProjectBtn.addEventListener("click", addProject);
addTaskBtn.addEventListener("click", addTask);
addCollabBtn.addEventListener("click", addCollab);
inputCheckbox.addEventListener("click", taskDone);

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

function addCollab() {
  const newCollabDiv = document.createElement("div");
  newCollabDiv.classList.add("collab-container");

  const newCollabImgDiv = document.createElement("div");
  newCollabImgDiv.classList.add("collab-circleImg");
  newCollabImgDiv.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80')";
  newCollabDiv.appendChild(newCollabImgDiv);

  collabList.appendChild(newCollabImgDiv);
}

function taskDone() {
  let counter = counterTaskbar.innerText;
  counter = 0;
  if (inputCheckboxChecked) {
  }
}

let isClosed = false;

const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const openSidebar = () => {
    sidebar.style.display = "flex";
  };
  const closeSidebar = () => {
    sidebar.style.display = "none";
  };

  if (isClosed) {
    openSidebar();
    isClosed = false;
  } else {
    closeSidebar();
    isClosed = true;
  }
};
