async function addUpdateLists(){
    const listReference = document.getElementById("reportList");
    const directoryRef = "./updateLogs/"
    var print = "";
    var directoryChildren = listDirectoryChildren(directoryRef);
    for (let i = 0; i < directoryChildren.length; i++) {
        var reportName = directoryChildren[i];
        var reportDescription = "Description "+i;
        fetch("./updateLogs/"+directoryChildren[i]).then(response => {
            reportDescription = response.text();
        });
        
         
         print += 
        `<li>
            <div class = subListItem>
                <h1>${reportName}</h1>
                <h3>Description:</h3>
                <p>${reportDescription}</p>
            </div>
        </li>`;
    }
    listReference.innerHTML = print;
}

function listDirectoryChildren(directoryHandle) {
  const children = [];
  
  // directoryHandle is obtained via window.showDirectoryPicker()
  for await (const entry of directoryHandle.values()) {
    children.push({
      name: entry.name,
      kind: entry.kind // 'file' or 'directory'
    });
  }
  
  return children;
}

window.onload = addUpdateLists;
