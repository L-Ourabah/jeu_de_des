// Définition des variables
let scores;
let roundScore;
let activePlayer;
let gamePlaying;


// Initialisation du jeu
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;



 // Réinitialise les scores à zéro
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

// Réinitialise les scores du tour en cours à zéro
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Cache l'affichage du dé
document.getElementById('dice').style.display = 'none';

// Réinitialise les noms des joueurs
document.getElementById('name-0').textContent = 'Joueur 1';
document.getElementById('name-1').textContent = 'Joueur 2';

// Supprime les classes 'winner' des interfaces des joueurs
document.getElementById('player-0-interface').classList.remove('winner');
document.getElementById('player-1-interface').classList.remove('winner');

// Supprime les classes 'active' des interfaces des joueurs
document.getElementById('player-0-interface').classList.remove('active');
document.getElementById('player-1-interface').classList.remove('active');

// Supprime les classes 'lose' des interfaces des joueurs
document.getElementById('player-0-interface').classList.remove('lose');
document.getElementById('player-1-interface').classList.remove('lose');

// Ajoute la classe 'active' à l'interface du joueur 1
document.getElementById('player-0-interface').classList.add('active');

// Joue le son de début de partie
document.getElementById('new-game-sound').play();
}

// Changement de joueur
function nextPlayer() {
  // Réinitialise le score du tour en cours à zéro.
  roundScore = 0;

  // Met à jour l'affichage du score du joueur actif à zéro.

  // chercher et utliser l'id 'current-' + numéro du joueur actif pour sélectionner l'élément et modifier son contenu.
  document.getElementById('current-' + activePlayer).textContent = '0';

  // enleve la classe 'active' de l'interface du joueur actif 

  document.getElementById('player-' + activePlayer + '-interface').classList.remove('active');

  // Passe au joueur suivant en inversant la valeur de la variable activePlayer.
  // Si activePlayer est 0, le change à 1, sinon le change à 0.
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Ajoute la classe 'active' à l'interface du joueur suivant 
  // 
  document.getElementById('player-' + activePlayer + '-interface').classList.add('active');

  // Affiche à nouveau le dé en rendant son affichage visible.
  // Utilise l'identifiant 'dice' pour sélectionner l'élément et modifier son style pour le rendre visible.
  document.getElementById('dice').style.display = 'block';
}


// Lancer le dé
document.getElementById('btn-roll').addEventListener('click', function () {
  // si le jeu est en cour alors executer la fonction
  if (gamePlaying) {
    // Générer un nombre aléatoire entre 1 et 6
    // on utilise la fonction Math.random() 
    var dice = Math.floor(Math.random() * 6) + 1;

    // Afficher l'image correspondant au résultat du dé

    // Joue le son du dé en utilisant l'élément audio avec l'id 'dice-sound'.
    document.getElementById('dice-sound').play();

    // Sélectionne l'élément avec la classe 'dice' en utilisant la méthode querySelector
    var diceDOM = document.querySelector('.dice');

    // Modifie le style de l'élément pour le rendre visible en définissant la propriété 'display' sur 'block'.
    diceDOM.style.display = 'block';

    // Modifie le contenu HTML de l'élément pour afficher l'image du dé correspondant au résultat obtenu.
    // Utilise le résultat du dé (dice) pour construire le chemin de l'image.
    diceDOM.innerHTML = '<img src="../image/dice' + dice + '.png"  />';

    // Mettre à jour le score en cours si le résultat est différent de 1
    // si le résultat du dé est différent de 1
    if (dice !== 1) {
      // Ajoute le résultat du dé (dice) au score du tour en cours (roundScore)
      roundScore += dice;

      // Modifie le contenu de l'élément avec l'id 'current-' +  numéro du joueur actif pour afficher le score du tour en cours
      document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
      // sinon passer au joueur suivant en appelant la fonction nextPlayer()
      nextPlayer();
    }
  }
});


// Hold
document.getElementById('btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    // Ajouter le score en cours au score global du joueur actif
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    //document.getElementById('hold-sound').play();
    document.querySelector('#hold-sound').play();


    // Vérifier si le joueur a gagné
    if (scores[activePlayer] >= 5) {
      document.getElementById('name-' + activePlayer).textContent = 'Vous avez gagné !';
      document.getElementById('player-' + activePlayer + '-interface').classList.remove('active');
      document.getElementById('player-' + activePlayer + '-interface').classList.add('winner');
      document.getElementById('dice').style.display = 'none';
      document.getElementById('winner-sound').play();

      // Vérifier le joueur actif pour afficher le message du perdant

      // Détermine le joueur inactif en fonction du joueur actif
      // Si le joueur actif est le joueur 1 (activePlayer === 0), alors le joueur inactif est le joueur 2 (inactivePlayer = 1).
      // Sinon, si le joueur actif est le joueur 2 (activePlayer !== 0), alors le joueur inactif est le joueur 1 (inactivePlayer = 0).
      var inactivePlayer = activePlayer === 0 ? 1 : 0;
      document.getElementById('name-' + inactivePlayer).textContent = 'Vous avez perdu !';
      document.getElementById('player-' + inactivePlayer + '-interface').classList.add('lose')


      gamePlaying = false;
    } else {
      // Passer au joueur suivant
      nextPlayer();
    }
  }
});

// Nouvelle partie
document.getElementById('btn-new').addEventListener('click', init);

// Initialiser le jeu au chargement de la page
init();




















