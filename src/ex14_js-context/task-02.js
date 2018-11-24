'use strict'
function Hangman(secretWord)
{
 this.secretWord = secretWord;
 this.errorsLeft = 6;
 this.wrongSymbols = [];
 this.guessedString = "_".repeat(this.secretWord.length);
 this.guess = function(letter)
 {
	var lowLetter = letter.toLowerCase();
	if (this.secretWord.indexOf(lowLetter) !== -1 )
	{
		this.guessedString = this.guessedString.slice(0, this.secretWord.indexOf(lowLetter)) + 
		lowLetter + this.guessedString.slice(this.secretWord.indexOf(lowLetter)+1);
		var oldIndex=this.secretWord.indexOf(lowLetter)+1;
		while (this.secretWord.indexOf(lowLetter,oldIndex) !== -1)
		{
			this.guessedString = this.guessedString.slice(0, this.secretWord.indexOf(lowLetter,oldIndex)) + 
			lowLetter + this.guessedString.slice(this.secretWord.indexOf(lowLetter,oldIndex)+1);
			oldIndex=this.secretWord.indexOf(lowLetter,oldIndex)+1;
		}
		if (this.guessedString.indexOf('_') === -1)
		{
			console.log(this.guessedString + ' | You won!');
		}
		else
		{
			console.log(this.guessedString);
		}
	}
    else
	{
		if (this.wrongSymbols.join('').indexOf(lowLetter) === -1)
		{
			this.errorsLeft--;
			this.wrongSymbols.push(lowLetter);
		}
		if (this.errorsLeft === 0)
		{
			console.log('wrong letter, errors left ' + this.errorsLeft + 
			' | Game over');
		}
		else
		{
			console.log('wrong letter, errors left ' + this.errorsLeft + 
			' | ' + this.wrongSymbols.join(','));
		}
	}		
    return this; 
 };
 this.getGuessedString = function()
 {
    return this.guessedString; 
 };
 this.getErrorsLeft = function()
 {
    return this.errorsLeft; 
 };
 this.getWrongSymbols = function()
 {
    return this.wrongSymbols; 
 };
 this.getStatus = function()
 {
	console.log(this.guessedString + ' | ' + 'errors left ' + this.errorsLeft); 
    return this; 
 };
 this.startAgain = function(newSecret)
 {
    this.secretWord = newSecret.toLowerCase();
    this.errorsLeft = 6;
    this.wrongSymbols = [];
    this.guessedString = "_".repeat(this.secretWord.length);
    return this;	
 }; 
};
var hangman = new Hangman('webpurple');
module.exports = hangman;