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
var motInitial = ""; // Déclare une variable "motInitial" et l'initialise avec une chaîne de caractères vide.
for (var i = 0; i < motSelectionne.length; i++) {
    // Déclare une boucle "for" qui commence à 0 et se répète tant que "i" est inférieur à la longueur de la variable "motSelectionne".
    // À chaque itération, le code entre les accolades sera exécuté.
    motInitial += "-"; // Ajoute un tiret "-" à la variable "motInitial" à chaque itération de la boucle.
}
elementMot.textContent = motInitial;
// Modifie le contenu textuel de l'élément avec l'ID "elementMot" pour qu'il affiche la valeur de la variable "motInitial".


// Nombre de tentatives et étape du pendu
var maxTentatives = 6;
var tentativeActuelle = 0;

// Fonction pour vérifier si la lettre devinée est correcte
function verifierDevine() {
    var devine = inputDevine.value.toLowerCase();
    // Déclare une variable "devine" et lui assigne la valeur de la propriété "value" de l'élément HTML avec l'ID "inputDevine".
    // La valeur est convertie en minuscules en utilisant la méthode toLowerCase().

    // Vérifie si la lettre a déjà été devinée
    if (lettresDevinees.includes(devine)) {
        // Vérifie si le tableau "lettresDevinees" contient déjà la lettre devinée.
        // La méthode includes() est utilisée pour vérifier si un élément est présent dans un tableau.
        elementResultat.textContent = "Cette lettre a déjà été donnée.";
        return;
        // La fonction est interrompue et ne poursuit pas son exécution.
    }

    lettresDevinees.push(devine);
    // Si la lettre n'a pas déjà été devinée, la lettre devinée est ajoutée à la fin du tableau "lettresDevinees" en utilisant la méthode push().
    // Le tableau "lettresDevinees" est utilisé pour stocker les lettres déjà devinées.

   



   // Vérifie si la lettre devinée est présente dans le mot
var motMisAJour = "";
// Déclare une variable "motMisAJour" et l'initialise avec une chaîne de caractères vide.
// Cette variable sera utilisée pour stocker la version mise à jour du mot en remplaçant les tirets par les lettres correctement devinées.

var devineCorrect = false;
// Déclare une variable "devineCorrect" et l'initialise à false.
// Cette variable sera utilisée pour indiquer si la lettre devinée est correcte ou non.

for (var i = 0; i < motSelectionne.length; i++) {
    // Déclare une boucle "for" qui commence à 0 et se répète tant que "i" est inférieur à la longueur de la variable "motSelectionne".
    // À chaque itération, le code entre les accolades sera exécuté.

    if (lettresDevinees.includes(motSelectionne[i])) {
        // Vérifie si la lettre actuelle de "motSelectionne" est présente dans le tableau "lettresDevinees".
        // Si c'est le cas, cela signifie que la lettre a été devinée correctement et doit être affichée dans le mot mis à jour.
        motMisAJour += motSelectionne[i];
        // Ajoute la lettre actuelle à la variable "motMisAJour".
    } else {
        // Si la lettre actuelle n'est pas présente dans "lettresDevinees", cela signifie qu'elle n'a pas été devinée correctement.
        // Dans ce cas, on ajoute un tiret "-" à la variable "motMisAJour" pour représenter une lettre non devinée.
        motMisAJour += "-";
    }

    // Vérifie si la lettre devinée est correcte
    if (motSelectionne[i] === devine) {
        // Compare la lettre actuelle de "motSelectionne" avec la lettre devinée, en utilisant l'opérateur de comparaison strict (===).
        // Si elles sont identiques, cela signifie que la lettre devinée est correcte.
        devineCorrect = true;
        // Met à jour la variable "devineCorrect" à true pour indiquer que la lettre devinée est correcte.
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
