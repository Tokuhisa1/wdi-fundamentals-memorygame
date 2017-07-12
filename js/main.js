// Unit 7
// 7b) Add the line of code below to the main.js file in Sublime Text:
//  console.log("Up and running!");

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

// 7d) Now we'll use console.log() to display the value of two cards, which will represent the cards that the user has flipped over.
// Use console.log() to display the values of two cards (you can pick which two cards you'd like to display).
// Here's what this should look like:
//   console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

// Unit 8
// 8a) In your main.js file, create an array to store the four cards.
// Create an array cards.
// The array should hold four strings - one for each of our cards.
// The strings should be "queen", "queen", "king", and "king".
let cards = ["queen", "queen", "king", "king"];

// 8b) Create an array cardsInPlay.
// Set its value to an empty array []
let cardsInPlay = [];

// 8c) Next up, you'll create a variable to represent the first card that the user flipped.
// Create a variable cardOne.
// Store the first item in the cards array in the variable cardOne.
// Hint: Use the array name, square brackets, and the index number to retrieve this card from the array.
let cardOne = cards[0];

// 8d) Now we'll want to add this first card to the cardsInPlay array.
// Use the push() method to add cardOne to the end of the cardsInPlay array.
// Here's an example of the push() method if you need a syntax refresher:
//   ghosts.push('clyde');
cardsInPlay.push(cardOne);

// 8e) For testing purposes, it will be helpful to display the card that was just flipped to the console to make sure we've done things correctly.
// Use console.log() to display the card that the user flipped
// The message that is displayed in the console should say "User flipped queen".
console.log("User flipped " + cardOne);

// 8f) Now create a variable to represent the second card that the user flipped.
// Create a variable cardTwo.
// Store the third item in the cards array in the variable cardTwo.
let cardTwo = cards[2];

// 8g) Now we'll want to add this second card to the cardsInPlay array.
// Use the push() method to add cardTwo to the end of the cardsInPlay array.
cardsInPlay.push(cardTwo);

// 8h) Use console.log() to display the card that the user flipped
// The message that is displayed in the console should say "User flipped king".
console.log("User flipped " + cardTwo);

// 8i) Next we'll add logic to check to see if two cards have been played, because in our final game we will not want to check for a match until the user has selected two cards.
// Write an if statement that checks to see if the length of the cardsInPlay array is 2.
// For the condition, you can use the length property to find out how many items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.
if (cardsInPlay.length === 2) {

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




















