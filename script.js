async function updateViewCount() {
    try {
        const response = await fetch('https://abacus.jasoncameron.dev/hit/thecoder12347.github.io/five-periods-lyneham');
        const data = await response.json();
        document.getElementById('viewCount').innerText = data.value;
    } catch (error) {
        console.error("Error fetching view count:", error);
        document.getElementById('viewCount').innerText = "N/A";
    }
}   
window.onload = updateViewCount;


function addUpdateLists(){
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