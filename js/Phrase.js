/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Initialises the Phrase class, and sets the necessary constructors.
 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase;
 		this.letterGuesses = [];
 		this.letterguess;
 		this.regexText;
}

/* This method initially creates the div where the letter placeholders
will appear. It then converts the phrase to a string, so that it can be
looped through and appended to the div, letter by letter.
*/

addPhraseToDisplay(randomPhrase) {
let phraseDiv = `<div id="phrase" class="section">
    <ul>
        `;
$('#phrase').append(`<p>${phraseDiv}</p>`);
let randomString = randomPhrase.toString();
for (let i=0; i<randomString.length; i++) {
	const result = /^[A-Za-z]+$/.test(randomString[i]);
	if (result) {
		$('#phrase').append(`<li class="hide letter ${randomString[i]}">${randomString[i]}</li>`);
	} else {
		$('#phrase').append(`<li class="space"></li>`);	}
}
$('#phrase').append(`    </ul>
</div>`);
};

/*
After performing a regex test, this method will add any letters that the user
has guessed to the letterGuesses array. Then, if the user guesses the same
letter a second time, they will receive an alert on-screen.

Next, the method checks to see if the phrase includes their guess. If it does,
the keyboard button is marked as "chosen", and is disabled from further use.
The showMatchedLetter() function is then called to reveal the letter on the main
display.

If the guess is incorrect, the letter is marked as "wrong", and is disabled from
further use.
*/

checkLetter(e) {
		this.letterGuess = e.toLowerCase();;
		this.regexText = /[A-Za-z]/.test(this.letterGuess);
		if (this.regexText) {
	 		let thisPhrase = game.activePhrase.toString();

			//Append letters to Letter CheckArray
			if (this.letterGuesses.includes(this.letterGuess)) {
				alert("You've already used that letter!")
			} else {
			this.letterGuesses.push(this.letterGuess);
			}

			if (game.currentPhrase.includes(this.letterGuess)) {
			$(`.key[value="${this.letterGuess}"]`).addClass("chosen").prop('disabled', true);
			for (let letter=0; letter<game.currentPhrase.length; letter++) {
				if (game.currentPhrase[letter] === this.letterGuess) {
					game.currentPhrase.splice(letter, 1); letter--;
					this.showMatchedLetter();
				}
			}
			} else {
				$(`.key[value="${this.letterGuess}"]`).addClass("wrong").prop('disabled', true);
				game.removeLife();
			}
		} else {
			alert("Please only use letters!");
		}
	}

// This method removes the "hidden" class on the letter, making it visible.
showMatchedLetter() {
 			$('li').parent().children(`.${this.letterGuess}`).removeClass('hide').addClass('show');

	}
}