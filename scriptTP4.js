function calcul() {
    let taille = parseFloat(document.getElementById("taille").value);
    let masse = parseFloat(document.getElementById("masse").value);

    if (taille <= 0 || masse <= 0 || isNaN(taille) || isNaN(masse)) {
        document.getElementById("resultat").textContent =
            "Veuillez entrer une taille et un poids valides.";
        return;
    }

    let imc = masse / (taille * taille);
    imc = imc.toFixed(2);

    let interpretation = "";

    if (imc < 18.5) {
        interpretation = "Maigreur";
    } else if (imc < 25) {
        interpretation = "Corpulence normale";
    } else if (imc < 30) {
        interpretation = "Surpoids";
    } else {
        interpretation = "Obésité";
    }

    document.getElementById("resultat").textContent =
        "Votre IMC est de " + imc + " (" + interpretation + ")";
}

