/*
  In this exercise, you write the logic behind a TicTacToe game.
  The interface (function names) have been defined, you fill in the code.
*/

function TicTacToe() {
    // represent the tictactoe board
	this.board = [
	              [null, null, null],
	              [null, null, null],
	              [null, null, null]
	             ]
}

// updates this.board with the given move
// move is a hash with three propertoes: x, y, and player
// example move in top left corner: {x:0, y:0, player:'X'}
TicTacToe.prototype.playMove = function(move) {
  // write this function to add a move to this.board
}

// returns True if a move is legal, False if not
TicTacToe.prototype.moveIsLegal = function(move) {
  // write this function
  // hint: move.x and move.y should be between 0 and 2, and space should be unblocked  	
}

// returns True if the game is over, false if the game is still ongoing
TicTacToe.prototype.isGameOver = function() {  	
  // write this function to detect if the ame is over
}


// prints 'X wins' if game is over and won by player 'X'
// prints 'O wins' if game is over and won by player 'O'
// prints "Tie" if game is over and tied
// print "Game in Progress" if no winner and game untied
TicTacToe.prototype.printGameState = function() {
  // write this function to print whether someone has won or if game is ongoing    	
}

// print the board to the console
TicTacToe.prototype.print = function(move) {
  // hint: use console.log to print this.board
}

// play a test game where X wins
TicTacToe.prototype.playTestXWinsGame = function() {
	// some sample move data where X wins
	var moves = [
	              {x:0, y:0, player:'X'},
	              {x:1, y:0, player:'O'},
	              {x:0, y:1, player:'X'},
	              {x:2, y:0, player:'O'},
	              {x:0, y:2, player:'X'}
	            ];
	for (var i=0;i<moves.length;i++) {
	  this.playMove(move);	  // plays the move
	  this.printGameState();  // print the state after each move
	}
	// if you did it right, 
	// this method should play 5 moves
	// and print 5 things:
	//            Game in Progress
	//            Game in Progress
	//            Game in Progress
	//            Game in Progress
	//            'X wins'
}


// play a test game where O wins
TicTacToe.prototype.playTestXWinsGame = function() {
  // make a method similar to playTestXWinsGame() above
}