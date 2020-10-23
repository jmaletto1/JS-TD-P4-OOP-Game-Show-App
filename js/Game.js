/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Initialises the Game class, and sets the necessary constructors

 class Game {
 	constructor() {
 		this.missed = 0;
 		this.phrases = this.createPhrases();
 		this.activePhrase = null;
 	}

// Creates the 5 phrases, which are returned to this.phrases.

 	createPhrases() {
 		let thephrases = [
 		new Phrase("one more mile"),
 		new Phrase("avoid comment sections"),
 		new Phrase("live laugh vomit"),
 		new Phrase("think before you speak"),
 		new Phrase("tickle the kitty")
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
before creating a new phrase object. We create the div that will store the game characters, 
and then add the phrase to the display using the relevant function.
*/

 	startGame() {
 		$('#overlay').hide();
 		let phraseDiv = `<div id="phrase" class="section">
    	<ul>`;
		$('#phrase').append(`<p>${phraseDiv}</p>`);
 		this.activePhrase = this.getRandomPhrase();
 		this.activePhrase.addPhraseToDisplay();
	};

/* The handle interaction method calls on the checkLetter() method from the Phrase
class. If the letter is a match, the letter is highlighted as green on the on-screen
keyboard, and the letter on the phrase itself is revealed.
If the letter is not a match, the letter is highlighted as red, disabled, and the 
user loses a life.

This function also checks if the user has won (or lost) the game each time they click
or type a letter.
*/ 

 	handleInteraction(e) {
 		//Check if the letter is a match
 		if (this.activePhrase.checkLetter(e)) {
 			$(`.key[value="${this.activePhrase.letterGuess}"]`).addClass("chosen").prop('disabled', true);
					this.activePhrase.showMatchedLetter(e);
 		} else {
 			$(`.key[value="${this.activePhrase.letterGuess}"]`).addClass("wrong").prop('disabled', true);
			this.removeLife();
 		}
 		// Check if the game is won
 		this.checkforWin();
	}

/*
The check for Win method sets this.win to true if the phrase array is
empty, and the user has not used up all of their lives. If so,
the this.gameOver() function is called with a value of true, which ends
the game. If the user is out of lives, the same function is called, with a value
of false.
*/
	checkforWin() {
		const hiddenLetters = $('.hide');
		if (hiddenLetters.length === 0 && this.missed < 5) {
			this.gameOver(true);
			}	else if (this.missed === 5) {
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
	} 
	 	} 
}