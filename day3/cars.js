document.getElementById("btn-get-all").onclick = getAllCars

const URL = "http://localshost:8080/cars"
function getAllCars(evt){
    fetch(URL)
    .then(res => res.json())
    .then(cars => makeTable(cars))
}

function makeTable(cars){
    const tableRows = cars.map(car =>
        <tr>
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.pricePrDay}</td>
        </tr>
        )

        const tableRowsAsString = tableRows.join("")
        //Do this at the examd and you won't get more than mx2-4.
        document.getElementById("table-body-cars").innerHTML = tableRowsAsString


}