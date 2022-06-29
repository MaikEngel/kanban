function addBacklog() {
    let backlog = document.getElementById('backlogItem')
    backlog.innerHTML = ``;
    for (let i = 0; i < tasks.length; i++) {
        let task=tasks[i]
        backlog.innerHTML += `
        <div id="backlogContainer${i}" class="backlogContainer urgencyColorRed">
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
                        ${task['description']}.
                    </p>
                </div>
            </div>
        </div>
        `;
    }
}
// if (condition) {
//     if (tasks['selectedAvatar']['urgency'] == "High") {
//         var(--urgency-color) = red;
//     }
// } else {
//     (tasks['selectedAvatar']['urgency'] == "medium") {
//         var(--urgency-color) = orange;
// } else {
//     (tasks['selectedAvatar']['urgency'] == "low") {
//         var(--urgency-color) = blue;
// }