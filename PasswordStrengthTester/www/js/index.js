// Variables declarations
let complexityPoints = 0;
let complexityMessage = document.querySelector("h3");
let li_number_characters =  document.querySelector(".li_number_characters");
let li_special_character = document.querySelector(".li_special_character");
let li_case = document.querySelector(".li_case");
let li_number = document.querySelector(".li_number");

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
        li_number_characters.classList.remove("not-validated");
        li_number_characters.classList.add("validated");
    } else {
        complexityPoints = 0;
        li_number_characters.classList.add("not-validated");
        li_number_characters.classList.remove("validated");
    }

    return complexityPoints;
}

// Fonction pour calculer la complexité selon la présence ou non de caractères spéciaux
function calculateSpecialCharactersPoints(password) {
    if(/[~@#_^*%.+:;=€$!?\\/]{1,}/gm.test(password)) {
        li_special_character.classList.remove("not-validated");
        li_special_character.classList.add("validated");

        return complexityPoints++;
    }

    li_special_character.classList.add("not-validated");
    li_special_character.classList.remove("validated");

    return complexityPoints;
}

// Fonction pour calculer la complexité selon la présence ou non de majuscules et minuscules
function calculateCasePoints(password) {
    if(/[A-Z]{1,}/gm.test(password) && /[a-z]{1,}/gm.test(password)) {
        li_case.classList.remove("not-validated");
        li_case.classList.add("validated");

        return complexityPoints++;
    }

    li_case.classList.add("not-validated");
    li_case.classList.remove("validated");

    return complexityPoints;
}

// Fonction pour calculer la complexité selon la présence ou non de chiffres
function calculNumberPoints(password) {
    if(/[0-9]{1,}/gm.test(password)) {
        li_number.classList.remove("not-validated");
        li_number.classList.add("validated");

        return complexityPoints++;
    }

    li_number.classList.add("not-validated");
    li_number.classList.remove("validated");
    return complexityPoints;
}


// Fonction pour modifier la couleur de fond selon la complexité du mdp saisi
function modifyBgColor() {
    complexityMessage.style.display = "initial";

    switch (true) {
        case (complexityPoints === 2 || complexityPoints === 3) :
            document.querySelector("body").classList.add("orange_gradient");
            document.querySelector("body").classList.remove("green_gradient");
            document.querySelector("body").classList.remove("red_gradient");

            complexityMessage.innerHTML = "Difficulté du mot de passe : Moyenne";
            break;
        case (complexityPoints >= 4) :
            document.querySelector("body").classList.add("green_gradient");
            document.querySelector("body").classList.remove("orange_gradient");
            document.querySelector("body").classList.remove("red_gradient");

            complexityMessage.innerHTML = "Difficulté du mot de passe : Bonne";
            break;
        default :
            document.querySelector("body").classList.add("red_gradient");
            document.querySelector("body").classList.remove("orange_gradient");
            document.querySelector("body").classList.remove("green_gradient");

            complexityMessage.innerHTML = "Difficulté du mot de passe : Mauvaise";
            break;
    }
}