// Vérifie si le bouton est valide en vérifiant s'il est vide.
function estValide(button) {
  // Renvoie true si le bouton est vide ,
  // sinon renvoie false.
  return button.innerHTML.length == 0;
}

// Modifie le contenu du bouton avec le symbole spécifié.
function setSymbol(btn, symbole) {
  // La propriété innerHTML permet d'accéder au contenu HTML à l'intérieur de l'élément bouton.
  // L'instruction btn.innerHTML = symbole affecte la valeur du paramètre symbole à l'intérieur du bouton.
  // Cela met à jour le contenu du bouton avec le symbole spécifié.
  btn.innerHTML = symbole;
}
// Recherche un vainqueur en vérifiant si les pions sur une ligne sont tous du même joueur.
// Si un vainqueur est trouvé, les pions de la ligne sont mis en surbrillance et la fonction renvoie true.
function rechercherVainqueur(pions, joueurs, tour) {
  // Vérifie si les pions sur une ligne sont tous du même joueur.
  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[1].innerHTML == joueurs[tour] &&
    pions[2].innerHTML == joueurs[tour]
  ) {
    // Si un vainqueur est trouvé, les pions de la ligne sont mis en surbrillance en changeant leur couleur de fond.
    pions[0].style.backgroundColor = "#9ACD32";
    pions[1].style.backgroundColor = "#9ACD32";
    pions[2].style.backgroundColor = "#9ACD32";

    // La fonction renvoie true pour indiquer qu'un vainqueur a été trouvé.
    return true;
  }


  if (
    pions[3].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour]
  ) {
    pions[3].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[5].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[6].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[6].style.backgroundColor = "#9ACD32";
    pions[7].style.backgroundColor = "#9ACD32";
    pions[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[3].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#9ACD32";
    pions[3].style.backgroundColor = "#9ACD32";
    pions[6].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[1].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour]
  ) {
    pions[1].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[7].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[2].style.backgroundColor = "#9ACD32";
    pions[5].style.backgroundColor = "#9ACD32";
    pions[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]
  ) {
    pions[2].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[6].style.backgroundColor = "#9ACD32";
    return true;
  }
}

// Vérifie s'il y a match nul en vérifiant si tous les pions sont remplis.
function matchNul(pions) {
  // Parcourt les pions et vérifie si un pion est vide (sans contenu textuel).
  // Si un pion vide est trouvé, la fonction renvoie false pour indiquer qu'il n'y a pas de match nul.
  for (var i = 0, len = pions.length; i < len; i++) {
    if (pions[i].innerHTML.length == 0) return false;
  }

  // Si tous les pions sont remplis, la fonction renvoie true pour indiquer un match nul.
  return true;
}

// La fonction Afficheur est un constructeur qui crée un objet Afficheur.
// Elle prend en paramètre un élément HTML (element) qui représente l'endroit où afficher du contenu.

var Afficheur = function (element) {
  // La variable affichage est une variable privée qui stocke l'élément HTML où afficher du contenu.
  var affichage = element;

  // La fonction setText est une fonction privée qui modifie le contenu de l'élément HTML avec le message spécifié.
  function setText(message) {
    affichage.innerHTML = message;
  }

  // L'objet retourné par le constructeur Afficheur possède une seule méthode publique appelée sendMessage.
  // Cette méthode permet d'appeler la fonction setText pour modifier le contenu de l'élément HTML.
  return { sendMessage: setText };
};

// La fonction main est la fonction principale qui est appelée pour démarrer le jeu.
function main() {
  // Récupère tous les boutons du jeu avec l'id "Jeu" et les stocke dans la variable pions.
  var pions = document.querySelectorAll("#Jeu button");

  // Crée un tableau joueurs contenant les symboles des joueurs.
  var joueurs = ["X", "O"];

  // Initialise la variable tour à 0 pour indiquer le tour du premier joueur.
  var tour = 0;

  // Initialise la variable jeuEstFini à false pour indiquer que le jeu n'est pas encore terminé.
  var jeuEstFini = false;

  // Crée un objet Afficheur en passant l'élément HTML avec l'id "StatutJeu" et le stocke dans la variable afficheur.
  var afficheur = new Afficheur(document.querySelector("#StatutJeu"));

  // Appelle la méthode sendMessage de l'objet afficheur pour afficher un message de démarrage du jeu.
  // Le message indique que le jeu peut commencer et précise quel joueur doit jouer en fonction de la variable tour.
  afficheur.sendMessage(
    "Le jeu peut commencer ! <br /> Joueur " +
    joueurs[tour] +
    " c'est votre tour."
  );

  // Boucle à travers tous les boutons du jeu pour ajouter un écouteur d'événement "click" à chacun.
  // Lorsqu'un bouton est cliqué, différentes actions sont effectuées en fonction de l'état du jeu.
  for (var i = 0, len = pions.length; i < len; i++) {
    pions[i].addEventListener("click", function () {
      // Vérifie si le jeu est déjà terminé. Si oui, ne fait rien et retourne.
      if (jeuEstFini) return;

      // Vérifie si la case cliquée n'est pas valide (déjà occupée). Si oui, affiche un message d'erreur.
      if (!estValide(this)) {
        afficheur.sendMessage(
          "Case occupée ! <br />Joueur " +
          joueurs[tour] +
          " c'est toujours à vous !"
        );
      } else {
        // Si la case est valide, place le symbole du joueur actuel sur la case et vérifie s'il y a un vainqueur.
        setSymbol(this, joueurs[tour]);
        jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

        // Si un vainqueur est trouvé, affiche un message de victoire et un lien pour rejouer.
        if (jeuEstFini) {
          afficheur.sendMessage(
            "Le joueur " +
            joueurs[tour] +
            ' a gagné ! <br /> <a href="morpion.html">Rejouer</a>'
          );
          return;
        }

        // Vérifie s'il y a un match nul.
        if (matchNul(pions)) {
          afficheur.sendMessage(
            'Match Nul ! <br/> <a href="morpion.html">Rejouer</a>'
          );
          return;
        }

        // Si aucun vainqueur n'est trouvé et qu'il n'y a pas de match nul, passe au tour du prochain joueur.
        // Incrémente le compteur de tour
        tour++;

        // Réinitialise le compteur de tour à 0 ou 1 en utilisant l'opérateur modulo (%)
        tour = tour % 2;

        // Envoie un message à l'afficheur indiquant quel joueur doit jouer ensuite
        afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
      }
    });
  }
}

main();