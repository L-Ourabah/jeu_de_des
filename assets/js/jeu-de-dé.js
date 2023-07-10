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
  


  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('dice').style.display = 'none';

  document.getElementById('name-0').textContent = 'Joueur 1';
  document.getElementById('name-1').textContent = 'Joueur 2';

  document.getElementById('player-0-interface').classList.remove('winner');
  document.getElementById('player-1-interface').classList.remove('winner');

  document.getElementById('player-0-interface').classList.remove('active');
  document.getElementById('player-1-interface').classList.remove('active');

  document.getElementById('player-0-interface').classList.remove('lose');
  document.getElementById('player-1-interface').classList.remove('lose');

  document.getElementById('player-0-interface').classList.add('active');

  document.getElementById('new-game-sound').play();
}

// Changement de joueur
function nextPlayer() {
  roundScore = 0;
  document.getElementById('current-' + activePlayer).textContent = '0';
  document.getElementById('player-' + activePlayer + '-interface').classList.remove('active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById('player-' + activePlayer + '-interface').classList.add('active');
  document.getElementById('dice').style.display = 'block';
}

// Lancer le dé
document.getElementById('btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // Générer un nombre aléatoire entre 1 et 6
    var dice = Math.floor(Math.random() * 6) + 1;

    // Afficher l'image correspondant au résultat du dé
    document.getElementById('dice-sound').play();
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.innerHTML = '<img src="../image/dice' + dice + '.png" alt="Dé" />';

    // Mettre à jour le score en cours si le résultat est différent de 1
    if (dice !== 1) {
      roundScore += dice;
      document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
      // Passer au joueur suivant
      nextPlayer();
    }
  }
});


// Hold
document.getElementById('btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // Ajouter le score en cours au score global du joueur actif
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    document.getElementById('hold-sound').play();

    // Vérifier si le joueur a gagné
    if (scores[activePlayer] >= 6) {
      document.getElementById('name-' + activePlayer).textContent = 'Vous avez gagné !';
      document.getElementById('player-' + activePlayer + '-interface').classList.remove('active');
      document.getElementById('player-' + activePlayer + '-interface').classList.add('winner');
      document.getElementById('dice').style.display = 'none';
      document.getElementById('winner-sound').play();
     
  // Vérifier le joueur actif pour afficher le message du perdant
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




















