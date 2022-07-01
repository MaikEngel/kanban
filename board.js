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
<div class="taskContainer" draggable="true" ondragstart="dragTask(${task['id'] - 1})" onclick="openFullscreen(${task['id'] - 1})">
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

function openFullscreen(id) {
  let fullscreen = document.getElementById('fullscreen');
  fullscreen.classList.remove('dNone')
  let task = tasks[id]
  fullscreen.innerHTML = ``;
  fullscreen.innerHTML = `
    <div class="fullscreenTask" id="fullscreenTask">
    <img class="fullscreenTaskPicture" src="${task['selectetAvatar']['picture']}">
      <div class="fullscreenTaskHeadline">
        <h2 class="fontColor">${task['title']}</h2>
      </div><br>
      <div style="display: flex; flex-direction: column;">
        <div >
          <span>Assigned to: ${task['selectetAvatar']['name']}</span><br>
          <span>E-Mail: ${task['selectetAvatar']['email']}</span>
        </div><br>  
        <span>${task['catergory']}</span>
      </div><br>
      <div>
        <h4>Description:</h4>
        <div class="fullscreenTaskDescription">
          <span>${task['description']}</span>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span>Created at: ${task['createdAt']}</span>
        <span>Due date: ${task['date']}</span>
      </div>
    </div>
  `;
  urgencyFullscreenColor(task)
}

function urgencyFullscreenColor(task) {
  let backgroundColor = document.getElementById('fullscreenTask')
  if (task['urgency'] == "high") {
    backgroundColor.classList.add('urgencyFullscreenColorRed')
  } if (task['urgency'] == "medium") {
    backgroundColor.classList.add('urgencyFullscreenColorOrange')
  } if (task['urgency'] == "low") {
    backgroundColor.classList.add('urgencyFullscreenColorBlue')
  }
}