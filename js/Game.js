/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
 	constructor() {
 		this.missed = 0;
 		this.phrases = this.createPhrases();
 		this.activePhrase = this.getRandomPhrase();
 		this.currentPhrase = [];
 		this.letterGuesses = [];
 		this.win = false;
 		this.phrase;
 		// this.reset = false;
 	}

 	createPhrases() {
 		const thephrases = [
 		["one"],
 		["two"],
 		["four"]
 		// ["one more mile"],
 		// ["buy low sell high"],
 		// ["do not lie in Court"],
 		// ["or do lie in court"],
 		// ["tickle the kitty"]
 		];
 		return thephrases;
 	}

 	getRandomPhrase() {
 	// const phrasesLength = this.phrases.length;
	let phraseIndex = Math.floor(Math.random() * this.phrases.length);
	let randomPhrase = this.phrases[phraseIndex];
	// alert(`Here is your phrase: ${randomPhrase}`);
	return randomPhrase;
 	}

 	startGame() {
 		$('#overlay').hide();
 		this.getRandomPhrase();
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

 	handleInteraction(e) {
 		this.phrase.checkLetter(e);
 		this.checkforWin();
	}

	checkforWin() {
		if (this.currentPhrase.length === 0 && this.missed < 5) {
			this.win = true;
			this.gameOver(true);
			}	else if (this.currentPhrase.length > 0 && this.missed === 5) {
					this.win = false;
					this.gameOver(false);
				}
			}
			// this.resetGame();

	removeLife() {
		this.missed += 1;
			$('.tries:first-child').remove();

	}
	gameOver(result) {
		if (result) {
			$('#overlay').show().css("background-color", "green");
			$('#game-over-message').text("You Win! Do a little dance.")
			$('#btn__reset').text("Play Again");
			this.resetGame();
			this.replaceContent();
		} else {
			$('#overlay').show().css("background-color", "red");
			$('#game-over-message').text("You Lose! Hahaha!");
			$('#btn__reset').text("Play Again");
			this.resetGame();
			this.replaceContent();
	}
 }

	 resetGame() {
		$('#phrase').children().remove();
	 }

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