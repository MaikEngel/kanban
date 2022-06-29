// let tasks = [];


function addBacklog() {
    let backlog = document.getElementById('backlogItem')
    backlog.innerHTML = ``;
    console.log (backlog);
    for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    backlog.innerHTML += `
        <div id="backlogContainer${i}" class="backlogContainer urgencyColorRed">
                <div class="assignedTo" class="category">
                    <img src="img/guy.jpg" alt="" class="backlogAssignedToPicture" />
                    <div>
                        <p class="margin0">Vorname, Nachname</p>
                        <p class="fontColor margin0">Email</p>
                    </div>
                </div>
                <p class="category">${task["category"]}</p>
                <div class="detailsContainer">
                    <h3 class="fontColor detailsHeadlineResponsiv">DETAILS</h3>
                    Created at: &nbsp ${task["createdAt"]}. <br>
                    Urgency &nbsp: &nbsp ${task["urgency"]}.
                    <div class="descriptions">
                    Desc. &nbsp: &nbsp ${task["description"]}. <br>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

}