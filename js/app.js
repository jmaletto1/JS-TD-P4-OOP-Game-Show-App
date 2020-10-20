/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Add Values to Buttons to simplify Manipulation.

$('.key').each(function(i, obj) {
	$(obj).val(obj.textContent);
});

// Create a new Game when the main page button is clicked.

 $('#btn__reset').on('click', function() {
 	game = new Game();
 	// game.replaceContent();
 	game.startGame();
 });

/* Accept a value typed in by the user's keyboard, 
and pass this to the handleInteraction() function.*/
 	$('body').on('keyup', (e) => {
	game.handleInteraction(e.key);
});

/* Accept a value clicked with the user's mouse, 
and pass this to the handleInteraction() function.*/

$('.keyrow').children().on('click', (e) => {
	let event = e.target.textContent;
	game.handleInteraction(event); 
	});

