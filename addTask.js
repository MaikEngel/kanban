let title;
let date;
let description;
let catergory;
let urgency;
let createButton = document.getElementById("create");
let resetButton = document.getElementById("cancel");
resetButton.addEventListener("click", resetFor);
let allInputElements = Array.from(document.querySelectorAll("[type]"))
  .concat(Array.from(document.querySelectorAll("textarea")))
  .concat(Array.from(document.querySelectorAll("select")));
resetFor();

let allTasks;
function getCounter() {
  if (
    backend.getItem("counter") === null ||
    backend.getItem("counter") === "undefined"
  ) {
    return 0;
  } else {
    return backend.getItem("counter");
  }
}
function inputToObject() {
  let counter = getCounter();
  title = document.getElementById("title").value;
  date = document.getElementById("date").value;
  description = document.getElementById("description").value;
  catergory = document.getElementById("category").value;
  urgency = document.getElementById("urgency").value;

  console.log("läuft", counter);
  let task = {
    title: title,
    date: date,
    description: description,
    catergory: catergory,
    urgency: urgency,
    id: counter,
    createdAt: new Date().getTime(),
    catergory: "to-do",
  };
  console.log(allTasks, counter);
  allTasks.push(task);
  backend.setItem(`allTasks`, allTasks).then(() => {
    counter++;
    console.log(counter);
    backend.setItem("counter", counter).then(() => {
      window.location.href = "./index.html";
      console.log(backend.getItem(counter));
    });
  });
  console.log(backend.getItem(`task${counter}`));
  //   counter++;
  //   // backend.deleteItem("counter");
  //   backend.setItem("counter", counter);
  resetFor();
}

// function reset() {

//     allInputElements.forEach((elem) => (elem.value = null));
// }

function resetFor() {
  for (i = 0; i < allInputElements.length - 1; i++) {
    allInputElements[i].value = null;
    allInputElements[i].required = "true";
  }
}
async function init() {
  await downloadFromServer();
  counter = backend.getItem("counter") || 1;
  allTasks = backend.getItem("allTasks") || [];
  document.querySelector("form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    inputToObject();
    // setTimeout(() => (window.location.href = "./index.html"), 500);
  });
}
