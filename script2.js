async function addUpdateLists(){
    const listReference = document.getElementById("reportList");
    const directoryRef = "./updateLogs/"
    let print = "";
    let hasFilesLeft = true;
    let increment = 1;
    while(hasFilesLeft){
        alert(directoryRef + "updateLog" + increment + ".txt");
        let response = await fetch(directoryRef+"updateLog"+increment+".txt");
        document.getElementById("asdf").innerText = response.ok;
        if(response.ok){
            let reportName = "Update Log "+increment;
            let reportDescription = await response.text();
            print += 
            `<li>
                <div class = subListItem>
                    <h1>${reportName}</h1>
                    <h3>Description:</h3>
                    <p>${reportDescription}</p>
                </div>
            </li>`;
            increment++;
        }else{
            hasFilesLeft = false;
        }
    }
    listReference.innerHTML = print;
}

window.onload = addUpdateLists;
