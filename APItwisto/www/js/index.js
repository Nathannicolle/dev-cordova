let parkingList = document.querySelector(".parkingList");

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    init();
}

window.addEventListener("load", () => {
    init();
})

function init() {
    getParkingList();
}

function getParkingList() {
    // Récupération de la liste des parkings
    fetch("https://data.twisto.fr/api/records/1.0/search/?dataset=parking_relais")
        .then((response) => {
            if(response.ok) {
                response.json().then((dataArray) => {
                    dataArray.records.forEach((record) => {
                        console.log(record)

                        let parkingItem = document.createElement("div");
                        parkingItem.classList.add("parking");
                        parkingList.appendChild(parkingItem);

                        let parkingName = document.createElement("h3");
                        parkingName.innerHTML = record.fields.nom;
                        parkingItem.appendChild(parkingName);

                        let parkingAddress = document.createElement("p");
                        parkingAddress.innerHTML = record.fields.adresse + ", " + record.fields.code_postal + " " + record.fields.ville;
                        parkingItem.appendChild(parkingAddress);
                    })
                });
            } else {
                document.querySelector(".error").innerHTML = "Erreur lors de la requête !";
            }
        });
}