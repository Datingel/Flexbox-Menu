//Selectors
const createProjectBtn = document.querySelector(".create-project");
const projectList = document.querySelector(".project-list");
const addTaskBtn = document.querySelector(".add-task");
const checklist = document.querySelector(".checklist");
const addCollabBtn = document.querySelector(".add-collab");
const collabList = document.querySelector(".collab-container");
const sidebarToggleBtn = document.querySelector(".toggle-btn");
const checkboxes = document.querySelectorAll(".input-task");
const checkboxElements = document.querySelectorAll(".checkbox");
let checkboxCounter = document.getElementById("counter");
const newTaskInput = document.getElementById("new-task");
const trashBtns = document.querySelectorAll(".trash-btn");
const checkbox = document.querySelector(".checkbox");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
createProjectBtn.addEventListener("click", addProject);
addTaskBtn.addEventListener("click", addTask);
addCollabBtn.addEventListener("click", addCollab);
filterOption.addEventListener("click", filterTodo);
for (const trashBtn of trashBtns) {
  for (const checkboxElement of checkboxElements) {
    trashBtn.addEventListener("click", (e) => {
      const item = e.target;
      const todo = item.parentElement;
      const todoParent = todo.parentElement;
      todoParent.remove();
    });
  }
  trashBtn.addEventListener("mouseenter", (e) => {
    trashBtn.classList.add("animate__animated", "animate__tada");
  });
  trashBtn.addEventListener("mouseleave", (e) => {
    trashBtn.classList.remove("animate__animated", "animate__tada");
  });
}
for (const checkbox of checkboxes) {
  checkbox.addEventListener("change", function () {
    countCheckedCheckbox();
  });
}

sidebarToggleBtn.addEventListener("click", toggleSidebar);

//Functions
function addProject(event) {
  console.log("Create Project");
}

function addTask(e) {
  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("checkbox");

  const newTrashBtn = document.createElement("button");
  newTrashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  newTaskDiv.appendChild(newTrashBtn);

  const newCheckbox = document.createElement("input");
  newCheckbox.classList.add("input-task");
  newCheckbox.setAttribute("type", "checkbox");
  newTaskDiv.appendChild(newCheckbox);

  const newLabel = document.createElement("label");
  newLabel.innerText = newTaskInput.value;
  newTaskDiv.appendChild(newLabel);

  if (newTaskInput.value.length < 1) {
    alert("This field can´t be empty, please fill something in!");
  } else {
    checklist.appendChild(newTaskDiv);
    newTaskInput.value = "";
  }
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

function countCheckedCheckbox() {
  let counter = 0;
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      counter++;
    }
  }
  checkboxCounter.innerText = counter;
}

let isClosed = false;

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const sideBarToggleBtn = document.querySelector(".hamburger");
  const openSidebar = () => {
    sidebar.style.display = "flex";
    sidebarToggleBtn.classList.add("is-active");
  };
  const closeSidebar = () => {
    sidebar.style.display = "none";
    sidebarToggleBtn.classList.remove("is-active");
  };

  if (isClosed) {
    openSidebar();
    isClosed = false;
  } else {
    closeSidebar();
    isClosed = true;
  }
}

function filterTodo(e) {
  const todos = checkbox.childNodes;
  console.log(todos);
}
