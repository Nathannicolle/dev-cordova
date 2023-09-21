document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
}

window.addEventListener("load", () => {
    let passwordField = document.querySelector("#password");

    passwordField.addEventListener("input", () => {
        if(passwordField.value.length > 8) {
            document.querySelector("body").style.background = "lime";
        } else {
            document.querySelector("body").style.background = "red";
        }
    })
});
