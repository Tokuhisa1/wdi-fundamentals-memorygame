// console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
// var cardOne = cards[0];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

function flipCard(cardId) {
  // cardsInPlay.push(cardOne);
  // console.log(`User flipped ${cardOne}`);

  // var cardTwo = cards[2];
  // cardsInPlay.push(cardTwo);
  // console.log(`User flipped ${cardTwo}`);

  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  checkForMatch();
}

flipCard(0);
flipCard(2);


