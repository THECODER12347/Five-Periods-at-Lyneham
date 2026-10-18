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