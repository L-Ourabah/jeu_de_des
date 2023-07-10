// Liste de mots pour le jeu
var mots = ["football", "geek", "ballon", "manette", "argent", "bresil", "orlando", "fourabaesque", "developpeur"];

// Mot aléatoire choisi pour le jeu
var motSelectionne = mots[Math.floor(Math.random() * mots.length)];

// Tableau pour stocker les lettres devinées
var lettresDevinees = [];

// Récupère les éléments HTML
var elementMot = document.getElementById("mot");
var inputDevine = document.getElementById("devineInput");
var boutonDevine = document.getElementById("devineButton");
var elementResultat = document.getElementById("resultat");
var boutonRejouer = document.getElementById("rejouerButton");
var imagePendu = document.getElementById("imagePendu");

// Affiche le mot initial avec des tirets pour les lettres non devinées
var motInitial = "";
for (var i = 0; i < motSelectionne.length; i++) {
    motInitial += "-";
}
elementMot.textContent = motInitial;

// Nombre de tentatives et étape du pendu
var maxTentatives = 6;
var tentativeActuelle = 0;

// Fonction pour vérifier si la lettre devinée est correcte
function verifierDevine() {
    var devine = inputDevine.value.toLowerCase();

    // Vérifie si la lettre a déjà été devinée
    if (lettresDevinees.includes(devine)) {
        elementResultat.textContent = "Cette lettre a déjà été donée.";
        return;
    }

    lettresDevinees.push(devine);

    // Vérifie si la lettre devinée est présente dans le mot
    var motMisAJour = "";
    var devineCorrect = false;
    for (var i = 0; i < motSelectionne.length; i++) {
        if (lettresDevinees.includes(motSelectionne[i])) {
            motMisAJour += motSelectionne[i];
        } else {
            motMisAJour += "-";
        }

        // Vérifie si la lettre devinée est correcte
        if (motSelectionne[i] === devine) {
            devineCorrect = true;
        }
    }

    elementMot.textContent = motMisAJour;

    // Affiche le résultat de la devinette
    if (devineCorrect) {
        elementResultat.textContent = "Bien joué !";
    } else {
        elementResultat.textContent = "Mauvaise lettre...";
        tentativeActuelle++;

        // Met à jour l'image dupendu
        imagePendu.src = "../image/hangman-" + tentativeActuelle + ".png";
    }

    // Vérifie si le joueur a perdu
    if (tentativeActuelle === maxTentatives) {
        elementResultat.textContent = "Dommage, tu as perdu ! Le mot était : " + motSelectionne;
        boutonDevine.disabled = true;
        boutonRejouer.style.display = "inline-block";
    }

    // Vérifie si le mot a été entièrement deviné
    if (!motMisAJour.includes("-")) {
        elementResultat.textContent = "Félicitations, tu as gagné !";
        boutonDevine.disabled = true;
        boutonRejouer.style.display = "inline-block";
    }

    // Efface la lettre devinée dans l'input
    inputDevine.value = "";
}

// Ajoute un gestionnaire d'événement pour le bouton "Deviner"
boutonDevine.addEventListener("click", verifierDevine);

// Ajoute un gestionnaire d'événement pour le bouton "Rejouer"
boutonRejouer.addEventListener("click", function () {
    window.location.reload();
});
