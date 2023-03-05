

documents.getElementById("svg2").onclick = getDetails
const URL = "https://countries.plaul.dk/api/countries"

function getDetails(evt) {
    const target = evt.target
    const id = target.id
    alert(id)
    fetch(URL+id)
    .then(res => res.json())
    .then(data => {
        alert(JSON.stringify(data))
    })
    
}