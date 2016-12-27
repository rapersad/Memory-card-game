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
		this.innerHTML = "<img src='http://p3.i.ntere.st/23e93eae2f234da51d8a3e71279d0f03_480.jpg'>"; // Vegetto
	} else {
		this.innerHTML = "<img src='http://pre01.deviantart.net/a120/th/pre/f/2012/234/8/a/dragon_ball_z___saikyo_no_senshi_son_gohan_by_dbcproject-d55vk3n.jpg'>"; //Gohan
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