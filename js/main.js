var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
function createBoard() {
    for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}

function isTwoCards() {
   cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://pre00.deviantart.net/ad4b/th/pre/f/2013/175/d/0/dragon_ball_z___super_saiyajin_trunks_by_dbcproject-d6ajgr9.jpg'>"; // Trunks
	} else {
		this.innerHTML = "<img src='https://s-media-cache-ak0.pinimg.com/236x/f5/40/58/f5405844b3f8be39ca7baf7491a2cb28.jpg'>"; // Vegteta
	}
  
  if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
      cardsInPlay = [];
  }
}

function isMatch(cards) {
    if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }

}

createBoard();