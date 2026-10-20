async function addUpdateLists(){
    const listReference = document.getElementById("reportList");
    const directoryRef = "./updateLogs/"
    var print = "";
    var hasFilesLeft = true;
    var increment = 1;
    while(hasFilesLeft){
        const response = await fetch(directoryRef+"updateLogs"+increment);
        if(response.ok){
            var reportName = "Update Log "+increment;
            var reportDescription = await response.text();
            print += 
            `<li>
                <div class = subListItem>
                    <h1>${reportName}</h1>
                    <h3>Description:</h3>
                    <p>${reportDescription}</p>
                </div>
            </li>`;
        }else{
            hasFilesLeft = false;
        }
    }
    listReference.innerHTML = print;
}

window.onload = addUpdateLists;
