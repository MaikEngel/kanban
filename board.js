let todos = document.getElementById('todos');
let progress = document.getElementById('progress');
let testings = document.getElementById('testings');
let dones = document.getElementById('dones');

let currentDraggedTask;

async function initBoard() {
  await init()
  await updateTasks()
}

function updateTasks() {
  let todo = tasks.filter(t => t['position'] == 'todo');
  todos.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    let task = todo[i]
    todos.innerHTML += generateTodoHTML(task, i);
    urgencyBackgroundColor(task)
    console.log(todo)

  }

  let inProgress = tasks.filter(t => t['position'] == 'inProgress');
  progress.innerHTML = "";
  for (let i = 0; i < inProgress.length; i++) {
    let task = inProgress[i]
    progress.innerHTML += generateTodoHTML(task, i);
    urgencyBackgroundColor(task);
    console.log(inProgress)

  }

  let testing = tasks.filter(t => t['position'] == 'testing');
  testings.innerHTML = "";
  for (let i = 0; i < testing.length; i++) {
    let task = testing[i]
    testings.innerHTML += generateTodoHTML(task, i);
    urgencyBackgroundColor(task);
    console.log(testing)
  }

  let done = tasks.filter(t => t['position'] == 'done');
  dones.innerHTML = "";
  for (let i = 0; i < done.length; i++) {
    let task = done[i]
    dones.innerHTML += generateTodoHTML(task, i);
    urgencyBackgroundColor(task);
    console.log(done)
  }
}

function generateTodoHTML(task) {
  return `
<div class="taskContainer" draggable="true" ondragstart="dragTask(${task['id'] - 1})">
  <div class="taskHeadline">
    <span style="margin-bottom: 8px; font-size: 20px;">${task['title']}</span>
  </div>  
  <div class="taskContainerDescription">
    <span style="margin-bottom: 8px;">${task['description']}</span>
  </div>
    <span id="urgencyBackgroundColor${task['id'] - 1}">${task['urgency']}</span><br>
  <div>
    <span style="color: #1e3190;">${task['catergory']}</span>
    <span style="color: #1e3190;">${task['date']}</span>
    <img class="taskPicture" src="${task['selectetAvatar']['picture']}">
  </div>
</div>  
`;
}

function urgencyBackgroundColor(task) {
  let backgroundColor = document.getElementById('urgencyBackgroundColor' + (task['id'] - 1))
  if (task['urgency'] == "high") {
    backgroundColor.classList.add('urgencyBackgroundColorRed')
  } if (task['urgency'] == "medium") {
    backgroundColor.classList.add('urgencyBackgroundColorOrange')
  } if (task['urgency'] == "low") {
    backgroundColor.classList.add('urgencyBackgroundColorBlue')
  }
}

function dragTask(id) {
  currentDraggedTask = id;
}


function allowDrop(ev) {
  ev.preventDefault();
}

function dropTask(category) {
  tasks[currentDraggedTask]['position'] = category;
  updateTasks();
}

// function moveTo()

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }


// let taskColumns = Array.from(document.querySelectorAll(".column"));
// let boardTasks = [...document.querySelectorAll(".task-cont")];
// console.log("board.js loaded");
// async function tasksToBoard() {
//   tasks = backend.getItem("tasks");
//   tasks.forEach((task) => {
//     //task elements
//     let taskCont = document.createElement("div");
//     taskCont.classList.add("task-cont");
//     taskCont.id = "task-id" + task.id;
//     let taskTitle = document.createElement("h4");
//     taskTitle.classList.add("task-title");
//     taskTitle.textContent = task.title;
//     let taskDescription = document.createElement("p");
//     taskDescription.classList.add("task-description");
//     taskDescription.textContent = task.description;
//     //taskID

//     //overflow toggle
//     let overflowToggle = document.createElement("span");
//     overflowToggle.textContent = "^";
//     overflowToggle.classList.add("overflow-toggle", "rotated");
//     overflowToggle.addEventListener("click", wholeTaskVisible);
//     //draggable
//     taskColumns.forEach((column) =>
//       column.addEventListener("dragover", (ev) => {
//         ev.preventDefault();
//         column.addEventListener("drop", taskDrop);
//         // this.style.cursor = "pointer";
//       })
//     );
//     taskCont.draggable = true;
//     taskCont.addEventListener("dragstart", taskDragStart);
//     taskCont.append(taskTitle, taskDescription, overflowToggle);
//     // taskCont.addEventListener("pointerover", textResizeGrow);
//     // taskCont.addEventListener("pointerleave", textResizeShrink);
//     taskColumns
//       .find((column) => column.id === task.boardColumn)
//       .append(taskCont);
//   });
// }
// async function initBoard() {
//   await downloadFromServer();
//   tasksToBoard();
//   boardTasks = [...document.querySelectorAll(".task-cont")];
// }
// initBoard();
// function textResizeGrow(ev) {
//   let colChildren = this.parentElement.children;

//   console.log();
//   [...colChildren].forEach(
//     (child) =>
//       (child.style.fontSize =
//         parseInt(getComputedStyle(this.parentElement).width) / 13 + "px")
//   );
// }

// function textResizeShrink(ev) {
//   let colChildren = this.parentElement.children;
//   console.log();
//   [...colChildren].forEach(
//     (child) =>
//       (child.style.fontSize =
//         parseInt(getComputedStyle(this.parentElement).width) / 14 + "px")
//   );
// }
// function wholeTaskVisible(ev) {
//   //   this.parentElement.style.height = "1000px";
//   this.classList.toggle("rotated");
//   this.parentElement.classList.toggle("show-everything");
//   this.parentElement.parentElement.classList.toggle("overflow-scroll");
//   this.scrollIntoView();
// }

// function taskDragStart(ev) {
//   //   ev.preventDefault();
//   ev.dataTransfer.setData("text", this.id);
// }
// function taskDrop(ev) {
//   //   ev.preventDefault();
//   //   console.log(ev.type);
//   ev.preventDefault();
//   let transferId = ev.dataTransfer.getData("text");
//   this.append(document.getElementById(transferId));
//   setTaskCategories();
// }
// async function setTaskCategories() {
//   let tasksCopy = JSON.parse(JSON.stringify(tasks));
//   console.log(tasksCopy);
//   [...document.querySelectorAll(".task-cont")].forEach((task) => {
//     tasksCopy.find(
//       (clonedTask) => clonedTask.id === parseInt(task.id.replace(/[^0-9]/g, ""))
//     ).boardColumn = task.parentElement.id;
//   });
//   console.log(tasksCopy);
//   tasksCopy.forEach((entry) => console.log(entry.title, entry.boardColumn));
//   backend.setItem("tasks", tasksCopy).then(() => {
//     console.log("tasks saved");
//   });
// }
