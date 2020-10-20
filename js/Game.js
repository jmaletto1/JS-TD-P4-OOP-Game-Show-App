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
 		this.reset = false;
 	}

 	createPhrases() {
 		const thephrases = [
 		["one"],
 		["two"],
 		["four"]
 		// ["One more mile"],
 		// ["Buy low sell high"],
 		// ["Do not lie in Court"],
 		// ["Or do lie in court"],
 		// ["Tickle the kitty"]
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
 		if (this.reset) {
 			//logic for resetting the game TO COME
 			alert("hi");
 		}
 		$('#overlay').hide();
 		this.getRandomPhrase();
 		this.phrase = new Phrase(this.activePhrase);
 		this.phrase.addPhraseToDisplay(this.activePhrase);

 		// Remove whitespace from the phrase, convert to a string.
		let newString = this.activePhrase.toString();
		newString = newString.split(' ').join('');
		// console.log(newString);

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
			// alert("That's incorrect! You lost a life");
			// alert(`You now have ${game.lives} remaining.`)
			console.log(game.currentPhrase);
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
 	// delete game;
 // 	this.missed = 0;
	// this.activePhrase = this.getRandomPhrase();
	// this.currentPhrase = [];
	// phrase.letterGuesses = [];
	// this.win = false;
	// this.phrase = '';
	console.log(`Phrase: ${this.phrase}`);
	$('#phrase').children().remove();
 }

 	replaceContent() {
 		$('#qwerty').replaceWith(
`					<div class="keyrow">
					<button class="key" value="q">q</button>
					<button class="key" value="w">w</button>
					<button class="key" value="e">e</button>
					<button class="key" value="r">r</button>
					<button class="key" value="t">t</button>
					<button class="key" value="y">y</button>
					<button class="key" value="u">u</button>
					<button class="key" value="i">i</button>
					<button class="key" value="o">o</button>
					<button class="key" value="p">p</button>
				</div>
				<div class="keyrow">
					<button class="key" value="a">a</button>
					<button class="key" value="s">s</button>
					<button class="key" value="d">d</button>
					<button class="key" value="f">f</button>
					<button class="key" value="g">g</button>
					<button class="key" value="h">h</button>
					<button class="key" value="j">j</button>
					<button class="key" value="k">k</button>
					<button class="key" value="l">l</button>
				</div>
				<div class="keyrow">
					<button class="key" value="z">z</button>
					<button class="key" value="x">x</button>
					<button class="key" value="c">c</button>
					<button class="key" value="v">v</button>
					<button class="key" value="b">b</button>
					<button class="key" value="n">n</button>
					<button class="key" value="m">m</button>
				</div>`
	)
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