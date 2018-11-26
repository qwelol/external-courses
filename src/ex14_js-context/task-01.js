'use strict'
var Calculator=(function()
{
 var num1=0;
 return{
	add: function add(num2)
	{
		if (!isNaN(num2))
		{
			num1+=num2;
		}
		return this;
	},
	subtract: function subtract(num2)
	{   
		if (!isNaN(num2))
		{
			num1-=num2; 
		}
		return this;
	},
	divide: function divide(num2)
	{
		if (!isNaN(num2))
		{
			num1/=num2; 
		}
		return this; 
	},
	multiply: function multiply(num2)
	{
		if (!isNaN(num2))
		{
			num1*=num2;
		}
		return this;
	},
	getResult: function getResult()
	{
		return num1;
	},
	reset: function reset()
	{
		num1=0; 
		return this;
	},
	setState: function setState(val)
	{
		if (!isNaN (val))
		{			
			num1=+val;
		}		
		return this;
	},
	fetchData: function fetchData(callback)
	{
		num1=500;	 
		callback(this.getResult());	  
		return this;	
	} 	 
 }
}());
module.exports = Calculator;