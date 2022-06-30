function addBacklog() {
  let backlog = document.getElementById("backlogItem");
  backlog.innerHTML = ``;
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    backlog.innerHTML += `
        <div id="backlogContainer${i}" class="backlogContainer ">
                <div class="assignedTo" class="category">
                    <img src=${task["selectetAvatar"]["picture"]} alt="" class="backlogAssignedToPicture" />
                    <div>
                        <p class="margin0">${task["selectetAvatar"]["name"]}</p>
                        <p class="fontColor margin0">${task["selectetAvatar"]["email"]}</p>
                    </div>
                </div>${task["catergory"]}</p>
                <div class="detailsContainer">
                    <h3 class="fontColor detailsHeadlineResponsiv">DETAILS</h3>
                    <p class="details">
                        ${task["description"]}.
                    </p>
                </div>
            </div>
        </div>
        `;
    let bgColor = document.getElementById("backlogContainer" + i);
    let urgencyLevel = task["urgency"];

    if (urgencyLevel == "high") {
      bgColor.classList.add("urgencyColorRed");
    }
    if (urgencyLevel == "medium") {
      bgColor.classList.add("urgencyColorBlue");
    }
    if (urgencyLevel == "low") {
      bgColor.classList.add("urgencyColorOrange");
    }
  }
}
