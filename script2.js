async function addUpdateLists(){
    const listReference = document.getElementById("reportList");
    var reportName = "Hello";
    var reportDescription = "Description";
    listReference.innerHTML = 
    `<li>
        <div class = subListItem>
            <h1>${reportName}</h1>
            <h3>Description:</h3>
            <p>${reportDescription}</p>
        </div>
    </li>`;
}
window.onload = addUpdateLists;
