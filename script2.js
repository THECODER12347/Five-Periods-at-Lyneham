async function addUpdateLists(){
    const listReference = document.getElementById("reportList");
    for (let i = 0; i < 5; i++) {
        var reportName = "Hello "+ i;
        var reportDescription = "Description "+i;
        listReference.innerHTML += 
        `<li>
            <div class = subListItem>
                <h1>${reportName}</h1>
                <h3>Description:</h3>
                <p>${reportDescription}</p>
            </div>
        </li>`;
    }
}
window.onload = addUpdateLists;
