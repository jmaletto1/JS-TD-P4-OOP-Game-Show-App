/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Initialises the Phrase class, and sets the necessary constructors.
 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase;
 		this.letterGuesses = [];
 		this.letterGuess;
 		this.regexText;
}

/* This method converts the phrase to a string, so that it can be
looped through and appended to the div, letter by letter.
*/

addPhraseToDisplay() {
let randomString = this.phrase.toString();
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
		this.letterGuess = e.toLowerCase();
		this.regexText = /[A-Za-z]/.test(this.letterGuess);
		if (this.regexText) {
	 		let thisPhrase = this.phrase.toString();

			//Append letters to Letter CheckArray
			if (this.letterGuesses.includes(this.letterGuess)) {
				alert("You've already used that letter!")
			} else {
			this.letterGuesses.push(this.letterGuess);
			}

			if (this.phrase.includes(this.letterGuess)) {
				return true;
			} else {
				return false;
			}
		} else {
			alert("Please only use letters!");

		}
	}

// This method removes the "hidden" class on the letter, making it visible.
showMatchedLetter(e) {
 		$('li').parent().children(`.${this.letterGuess}`).removeClass('hide').addClass('show');

	}
}