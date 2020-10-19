/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

 $('#btn__reset').on('click', function() {
 	if (!game) {
 		game = new Game();
 		// phrase.createDiv();
 	} else {
 	}
 	if (game.reset === true) {
 	$('#phrase').children().remove();
 	game.resetGame();
 	game = '';	
 	game = new Game();
 	}
 	game.startGame();
 	game.replaceContent();

 	$('body').on('keyup', (e) => {
	game.handleInteraction(e.key);
});

$('.keyrow').children().on('click', (e) => {
	let event = e.target.textContent;
	game.handleInteraction(event); 
 // }
});



// $("#qwerty").on('click', (e) => {
//   if (e.target.className !== 'keyrow' && e.target.id !== 'qwerty') {
//   	let event = e.target.textContent;
//       game.handleInteraction(event);
//   }
// });

});

