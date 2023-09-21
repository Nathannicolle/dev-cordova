document.addEventListener('deviceready', onDeviceReady, false);

let complexityPoints = 0;

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    initScript();
}

window.addEventListener("load", () => {
    initScript();
});

// Fonction pour intiliser le script (ainsi l'initialisation est commune à la partie web et à la partie mobile (native))
function initScript() {
    let passwordField = document.querySelector("#password");

    passwordField.addEventListener("input", () => {
        calculateLengthPoints(passwordField.value);
        modifyBgColor();
    })
}

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
            document.querySelector("body").classList.add("orange_gradient");
            document.querySelector("body").classList.remove("green_gradient");
            document.querySelector("body").classList.remove("red_gradient");
            break;
        case (complexityPoints > 1) :
            document.querySelector("body").classList.add("green_gradient");
            document.querySelector("body").classList.remove("orange_gradient");
            document.querySelector("body").classList.remove("red_gradient");
            break;
        default :
            document.querySelector("body").classList.add("red_gradient");
            document.querySelector("body").classList.remove("orange_gradient");
            document.querySelector("body").classList.remove("green_gradient");
            break;
    }
}