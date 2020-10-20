/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
// const phrase = new Phrase(this.activePhrase);

 $('#btn__reset').on('click', function() {
 	game = new Game();
 	game.startGame();
 	// game.replaceContent();
 });

 	$('body').on('keyup', (e) => {
	game.handleInteraction(e.key);
});

$('.keyrow').children().on('click', (e) => {
	let event = e.target.textContent;
	game.handleInteraction(event); 
	});

