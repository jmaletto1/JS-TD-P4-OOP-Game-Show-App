/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Initialises the Game class, and sets the necessary constructors

 class Game {
 	constructor() {
 		this.missed = 0;
 		this.phrases = this.createPhrases();
 		this.activePhrase = this.getRandomPhrase();
 		this.currentPhrase = [];
 		this.letterGuesses = [];
 		this.win = false;
 		this.phrase;
 	}

// Creates the 5 phrases, which are returned to this.phrases.

 	createPhrases() {
 		const thephrases = [
 		["one more mile"],
 		["avoid comment sections"],
 		["live laugh vomit"],
 		["think before you speak"],
 		["tickle the kitty"]
 		];
 		return thephrases;
 	}

// Selects a random phrase from the 5 phrases, and returns this to this.activePhrase.
 	getRandomPhrase() {
	let phraseIndex = Math.floor(Math.random() * this.phrases.length);
	let randomPhrase = this.phrases[phraseIndex];
	return randomPhrase;
 	}

/* Starts the game when clicked upon. This initially hides the overlay,
before creating a new phrase object. We then add the phrase to the display
using the relevant function.

Additionally - This function also removes the whitespace from the string,
before looping through the letters, converting them to lowercase, and
appending them to the this.currentPhrase array.
*/

 	startGame() {
 		$('#overlay').hide();
 		this.phrase = new Phrase(this.activePhrase);
 		this.phrase.addPhraseToDisplay(this.activePhrase);

 		// Remove whitespace from the phrase, convert to a string.
		let newString = this.activePhrase.toString();
		newString = newString.split(' ').join('');

		// Split the string and append to the array. Also convert to lower case.
		for (let i=0; i<newString.length; i++) {
			this.currentPhrase.push(newString.charAt(i).toLowerCase());
		}
	};

/* The handle interaction method calls on the checkLetter() method from the Phrase
class. Once it's checks have been completed, it checks if the user has won
or lose the game.
*/ 

 	handleInteraction(e) {
 		this.phrase.checkLetter(e);
 		this.checkforWin();
	}

/*
The check for Win method sets this.win to true if the phrase array is
empty, and the user has not used up all of their lives. If so,
the this.gameOver() function is called with a value of true, which ends
the game.
If the user is out of lives, the same function is called, with a value
of false.
*/
	checkforWin() {
		if (this.currentPhrase.length === 0 && this.missed < 5) {
			this.win = true;
			this.gameOver(true);
			}	else if (this.currentPhrase.length > 0 && this.missed === 5) {
					this.win = false;
					this.gameOver(false);
				}
			}

/* This method adds a life to the "missed" counter, and replaces
a "liveHeart" with a "lostHeart".
*/
	removeLife() {
		this.missed += 1;
		$('#scoreboard ol').prepend('<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">');
		$('.tries:last-child').remove();
	}

/* This method will decide which overlay and message to show, depending on
whether it is passed true or false. It also calls the resetGame() and
replaceContent() functions, which reset the board for the next attempt.
*/

	gameOver(result) {
		if (result) {
			$('#overlay').show().removeClass().addClass("win");
			$('#game-over-message').text("You Win! Do a little dance.")
			$('#btn__reset').text("Play Again");
			this.resetGame();
			this.replaceContent();
		} else {
			$('#overlay').show().removeClass().addClass("lose");
			$('#game-over-message').text("You Lose! Hahaha!");
			$('#btn__reset').text("Play Again");
			this.resetGame();
			this.replaceContent();
	}
 }

// This removes the previous phrase from the board.

	 resetGame() {
		$('#phrase').children().remove();
	 }

// This method essentially resets the keyboard and love hearts to their original state.

 	replaceContent() {
 	$('.keyrow').children().removeClass('chosen wrong').prop('disabled', false);
 	$('#scoreboard ol').children().remove();
 	
 	// Replace the 5 Love Hearts
 	for (let i=0; i<5; i++) {
	$('#scoreboard ol').append(
 		`<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`
	 	);
	} this.reset = true;
	 	} 
}