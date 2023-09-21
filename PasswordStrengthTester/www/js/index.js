document.addEventListener('deviceready', onDeviceReady, false);

let complexityPoints = 0;

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
}

window.addEventListener("load", () => {
    let passwordField = document.querySelector("#password");

    passwordField.addEventListener("input", () => {
        calculateLengthPoints(passwordField.value);
        modifyBgColor();
    })
});

// Fonction pour calculer la complexité selon sa longueur
function calculateLengthPoints(password) {
    switch (true) {
        case (password.length > 8 && password.length <= 10) :
            complexityPoints++;
            break;
        case (password.length > 10) :
            complexityPoints += password.length / 2;
            break;
        default :
            complexityPoints = 0;
            break;
    }

    return complexityPoints;
}

// Fonction pour modifier la couleur de fond selon la complexité du mdp saisi
function modifyBgColor() {
    switch (true) {
        case (complexityPoints === 1) :
            document.querySelector("body").style.background = "orange";
            break;
        case (complexityPoints > 1) :
            document.querySelector("body").style.background = "lime";
            break;
        default :
            document.querySelector("body").style.background = "red";
            break;
    }
}
