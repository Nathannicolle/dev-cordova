document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    init();
}

window.addEventListener("load", () => {
    init();
})

function init() {
    let parkingList = document.querySelector(".parkingList");

    // Récupération de la liste des parkings
    fetch("https://data.twisto.fr/api/records/1.0/search/?dataset=parking_relais")
        .then((response) => {
            if(response.ok) {
                response.json().then((dataArray) => {
                    dataArray.records.forEach((record) => {
                        console.log(record.fields.nom);
                    })
                });
            } else {
                document.querySelector(".error").innerHTML = "Erreur lors de la requête !";
            }
        });
}
