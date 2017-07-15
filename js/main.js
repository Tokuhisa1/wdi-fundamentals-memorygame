// Unit 7
// 7c) Create four variables that simulate the cards in your game.
// They should be string types.
// Two should have a value of "queen", and the other two should have a value of "king".
// They will represent your cards (e.g., "queen" card).
// Name your variables cardOne, cardTwo, cardThree, and cardFour.
// Here's an example of one card:
//   var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// Unit 8
// 8a) In your main.js file, create an array to store the four cards.
// Create an array cards.
// The array should hold four strings - one for each of our cards.
// The strings should be "queen", "queen", "king", and "king".
// let cards = ["queen", "queen", "king", "king"];

// 8c) Next up, you'll create a variable to represent the first card that the user flipped.
// Create a variable cardOne.
// Store the first item in the cards array in the variable cardOne.
// Hint: Use the array name, square brackets, and the index number to retrieve this card from the array.
// let cardOne = cards[0];

// 8f) Now create a variable to represent the second card that the user flipped.
// Create a variable cardTwo.
// Store the third item in the cards array in the variable cardTwo.
// let cardTwo = cards[2];

// Unit 10
// 10a) In the cards array, create four objects, one for each card.
// Hint: Here's the syntax for creating an array that contains objects:
// var myArray = [
//    {
//        color: 'red',
//        flower: 'rose',
//        petals: 20
//    },
//    {
//        color: 'blue',
//        flower: 'violet',
//        petals: 6
//    }
// ];
// Here is what each object should look like:
// rank  suit  cardImage
// "queen" "hearts"  "images/queen-of-hearts.png"
// "queen" "diamonds"  "images/queen-of-diamonds.png"
// "king"  "hearts"  "images/king-of-hearts.png"
// "king"  "diamonds"  "images/king-of-diamonds.png"
const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

// 8b) Create an array cardsInPlay.
// Set its value to an empty array []
const cardsInPlay = [];

// Unit 9
// 9e) Almost there! To add a little extra organization to our code, let's create a function to store the steps to check for a match.
  // 9e1. Right below the cardsInPlay array and right above the flipCard function, create a function checkForMatch. This function will not have any parameters.
function checkForMatch() {

    // 9e2. Move the following lines of code into the checkForMatch function.
    // if (cardsInPlay[0] === cardsInPlay[1]) {
    //     console.log("You found a match!");
    // } else {
    //     console.log("Sorry, try again.");
    // }
  // 8j) Now we'll want to add logic that checks for equality between the two cards in the cardsInPlay array.
  // Inside of the if statement you created in the last step, create an if...else statement that checks for equality between the two cards in the cardsInPlay array.
  // For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.
  // Hint: You'll want to use the === operator here.
  if (cardsInPlay[0] === cardsInPlay[1]) {

    // 8k) If values are equal, execute an alert with the message "You found a match!"
    alert("You found a match!");
  } else {

    // 8l) If values are not equal, execute an alert with the message "Sorry, try again."
    alert("Sorry, try again.");
  }
}

// 9a) In main.js, create a function to store all steps that should happen when the user flips a card.
// In your main.js file, after the lines with the cards and cardsInPlay arrays, create a function flipCard.
// The function should accept one parameter: cardId.
// Move all the code that you wrote for the last unit's assignment, except for the cards and cardsInPlay arrays into the flipCard function.
// Note: We are leaving the two arrays outside of the flipCard function since we want to make sure that the two arrays have global scope.

// 11e) In the last step we added a click event to each card, so that when each card is clicked, the flipCard function will run. Before we can test things out, we'll need to make a few edits to our flipCard function.
  // 11e1. Remove the cardId parameter from the flip card function. We no longer want to hard-code the index number of the card that should be flipped.
function flipCard() {

  // 11e2. On the first line inside the flipCard function, use the getAttribute method to get the data-id attribute of the card that was just clicked and store it in a variable cardId.
  // Hint: We can use the this keyword to access the card that was clicked: this.getAttribute('attribute-we-want-to-get-goes-here');
  let cardId = this.getAttribute('data-id');

  // 7b) Add the line of code below to the main.js file in Sublime Text:
  //  console.log("Up and running!");

  // 7d) Now we'll use console.log() to display the value of two cards, which will represent the cards that the user has flipped over.
  // Use console.log() to display the values of two cards (you can pick which two cards you'd like to display).
  // Here's what this should look like:
  //   console.log("User flipped " + cardOne);
  // console.log("User flipped " + cardThree);

  // 8e) For testing purposes, it will be helpful to display the card that was just flipped to the console to make sure we've done things correctly.
  // Use console.log() to display the card that the user flipped
  // The message that is displayed in the console should say "User flipped queen".
  // console.log("User flipped " + cardOne);

  // 8h) Use console.log() to display the card that the user flipped
  // The message that is displayed in the console should say "User flipped king".
  // console.log("User flipped " + cardTwo);

  // 9b) Within the flipCard function, add a console.log() statement to display the card that was flipped over.
  // We'll use the index number that is passed in when the flipCard function is called to access this card from the cards array like so: cards[cardId].
  // The message that is logged in the console should read "User flipped queen" or "User flipped king".
  // Hint: Use string concatenation inside of the console.log() statement to construct this message.
  // "User flipped " + cards[cardId]
  // console.log("User flipped " + cards[cardId]);

  // 10b) Now that we have our card objects, we'll want to update lines of code where we were accessing values from the cards array to reflect these changes.
    // 10b1. In the flipCard function, find this console.log statement: console.log("User flipped " + cards[cardId]);
    // Update the portion cards[cardId]. Right now, this code is accessing the entire first object in the cards array. You'll want to update this code so that we are accessing the rank property of this object.
    // Hint: We'll give you this one, and you can use this as a reference for the next two steps. Update this to cards[cardId].rank.
  console.log("User flipped " + cards[cardId].rank);

  // 10c) Now let's add a bit of new code so that we can "see" the cards that are flipped in our console. Add two console.log() statements. One should log the cardImage and the other should log the suit for the flipped card.
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  // 8d) Now we'll want to add this first card to the cardsInPlay array.
  // Use the push() method to add cardOne to the end of the cardsInPlay array.
  // Here's an example of the push() method if you need a syntax refresher:
  //   ghosts.push('clyde');
  // cardsInPlay.push(cardOne);

  // 9c) Next, we'll want to add the card that the user flipped to the cardsInPlay array.
  // Use the push method to add the card that the user flipped (cards[cardId]) to the cardsInPlay array.
  // cardsInPlay.push(cards[cardId]);

    // 10b2. Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
    // Hint: You'll want to use the rank property like we did in the last step.
  cardsInPlay.push(cards[cardId].rank);

    // 11e3. Alright! Finally, when the user clicks a card we want to display the image for the face of that card in place of the back of the card. Right before the if statement where you are checking to see if two cards have been played, use the setAttribute method to update the src attribute to the image of the card that was just clicked, which is stored in the cardImage property in that card's object in the cards array.
    // Hint #1: How can you access the cardImage property? Take a look at the line where we were logging this property to the console in the last assignment for a hint:
    // console.log(cards[cardId].cardImage)
    // Hint #2: Just as we did in the last step, we can use the `this` keyword to access the element the user just clicked on. Except now instead of getting an attribute, we want to _set_ the `src` attribute.
    // Hint #3: We'll want to make sure that there are _no quotation marks_ surrounding the new value of the `src` attribute (cards[cardId].cardImage) when we use the `setAttribute()` method.
  this.setAttribute('src', cards[cardId].cardImage);

  // 8i) Next we'll add logic to check to see if two cards have been played, because in our final game we will not want to check for a match until the user has selected two cards.
  // Write an if statement that checks to see if the length of the cardsInPlay array is 2.
  // For the condition, you can use the length property to find out how many items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.
  if (cardsInPlay.length === 2) {

    // Now, call the checkForMatch function from inside the flipCard function, where the lines above used to sit.
    checkForMatch();
  }
}

// Unit 11
// 11b) In the main.js file in Sublime Text, add a function that will create the game board. Right after the flipCard function, add a new function createBoard. This function will not have any parameters.
function createBoard() {

  // 11c) Now add each card to the board.
    // 11c1. Within the createBoard function, use a for loop to loop through the cards array.
    // Here's a refresher on the syntax for a for loop:
    //   for (var i = 0; i < arrayName.length; i++) {

    //   }
  for (let i = 0; i < cards.length; i++) {

    // 11c2. Now use the createElement method to create an img element and store it in a variable cardElement.
    // Hint: Here's what the code for creating a list item would look like, for reference:
    // var newListItem = document.createElement('li');
    // In our project, we'll want to create an img element instead of a li.
    let cardElement = document.createElement('img');

    // 11c3. Now use the setAttribute() method to add a src attribute for the cardElement. The src should be "images/back.png"
    // Hint: For reference, here's the syntax for setting an attribute:
    // cardElement.setAttribute('attributeName', 'attributeValue');
    cardElement.setAttribute('src', "images/back.png");

    // 11c4. Now use the setAttribute() method once again to set the card's 'data-id' attribute to be the index of the current element, i (no quotes).
    // Note: data- attributes are meant to store data about an element that is not tied to a style.
    cardElement.setAttribute('data-id', i);

    // 11c5. When each card is created (still within the for loop), we'll want to use the addEventListener() method to add a click event to the cardElement. The function that we want to run when a user clicks on a card is the flipCard function.
    cardElement.addEventListener('click', flipCard);

    // 11c6. Finally, use the appendChild() method to append the current cardElement to the game board (which has an id of game-board).
    document.getElementById('game-board').appendChild(cardElement);
  }
}

// 9d) Now let's call the flipCard function to simulate the user flipping a card.
  // 9d1. On the line after the flipCard function, call the flipCard function, passing in 0 as an argument.
  // Note: we'll want to make sure to call the flipCard after it has already been defined, or we will get an error.
// flipCard(0);

  // 9d2. Now, on the next line, call the flipCard function again, passing in 2 as an argument.
// flipCard(2);

// 11d) Now let's call the gameBoard function to create the board!
// At the very end of your JavaScript file, after the createBoard function, call the createBoard function.
createBoard();











