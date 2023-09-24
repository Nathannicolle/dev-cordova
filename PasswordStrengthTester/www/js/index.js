let complexityPoints = 0;
document.addEventListener('deviceready', onDeviceReady, false);
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
        complexityPoints = 0;

        calculateLengthPoints(passwordField.value);
        calculateSpecialCharactersPoints(passwordField.value);
        calculateCasePoints(passwordField.value);
        calculNumberPoints(passwordField.value);
        modifyBgColor();
    })
}

// Fonction pour calculer la complexité selon sa longueur
function calculateLengthPoints(password) {
    if(password.length > 8) {
        complexityPoints++;
    } else {
        complexityPoints = 0;
    }

    return complexityPoints;
}

// Fonction pour calculer la complexité selon la présence ou non de caractères spéciaux
function calculateSpecialCharactersPoints(password) {
    if(/[~@#_^*%.+:;=€$!?\\/]{1,}/gm.test(password)) {
        return complexityPoints++;
    }

    return complexityPoints;
}

// Fonction pour calculer la complexité selon la présence ou non de majuscules et minuscules
function calculateCasePoints(password) {
    if(/[A-Z]{1,}/gm.test(password) && /[a-z]{1,}/gm.test(password)) {
        return complexityPoints++;
    }

    return complexityPoints;
}

// Fonction pour calculer la complexité selon la présence ou non de chiffres
function calculNumberPoints(password) {
    if(/[0-9]{1,}/gm.test(password)) {
        return complexityPoints++;
    }

    return complexityPoints;
}


// Fonction pour modifier la couleur de fond selon la complexité du mdp saisi
function modifyBgColor() {
    console.log(complexityPoints);
    switch (true) {
        case (complexityPoints === 2 || complexityPoints === 3) :
            document.querySelector("body").classList.add("orange_gradient");
            document.querySelector("body").classList.remove("green_gradient");
            document.querySelector("body").classList.remove("red_gradient");
            break;
        case (complexityPoints >= 4) :
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