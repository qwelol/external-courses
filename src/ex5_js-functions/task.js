'use strict'
var Calculator=(function()
{
 var num1=0;
 return {
 add: function add(num2)
	 {
		if (!isNaN(num2))
		{
			num1+=num2;
		}
		return add;
	 },
 subtract: function subtract(num2)
	 {
		if (!isNaN(num2))
		{
			num1-=num2; 
		}
		return subtract;
	 },
 divide: function divide(num2)
	 {
		if (!isNaN(num2))
		{
			num1/=num2; 
		}
		return divide; 
	 },
 multiply: function multiply(num2)
	 {
		if (!isNaN(num2))
		{
			num1*=num2;
		}
		return multiply;
	 },
 getResult: function getResult()
	 {
		return num1; 
		
	 },
 reset: function reset()
	 {
		num1=0; 
	 }
 }
}())
module.exports = Calculator;