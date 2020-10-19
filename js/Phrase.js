/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase;
 		// this.currentPhrase = [];
 		this.letterGuesses = [];
 		this.letterguess;
 		// this.win = false;

}

addPhraseToDisplay(randomPhrase) {
	this.letterGuesses = [];
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
// alert(randomPhrase);
// }
};

checkLetter(e) {
		this.letterGuess = e;
		// console.log(letterGuess);
 		let thisPhrase = game.activePhrase.toString();
		// console.log(letterGuess);

		//Append letters to Letter CheckArray
		if (this.letterGuesses.includes(this.letterGuess)) {
			alert("You've already used that letter!")
		} else {
		this.letterGuesses.push(this.letterGuess);
		// console.log(this.letterGuesses);
		}

		if (game.currentPhrase.includes(this.letterGuess)) {
		$(`.key[value="${this.letterGuess}"]`).addClass("chosen").prop('disabled', true);
		for (let letter=0; letter<game.currentPhrase.length; letter++) {
			if (game.currentPhrase[letter] === this.letterGuess) {
				game.currentPhrase.splice(letter, 1); letter--;
				this.showMatchedLetter();
				//Unhide the relevant letters
 			// $('li').parent().children(`.${letterGuess}`).removeClass('hide').addClass('show');
			}
		}
		} else {
			$(`.key[value="${this.letterGuess}"]`).addClass("wrong").prop('disabled', true);
			// $('input[type="button"][value="My task"]')
			game.removeLife();
		}
}

showMatchedLetter() {
 			$('li').parent().children(`.${this.letterGuess}`).removeClass('hide').addClass('show');

	}
}