"use strict";
var primeNumber=function (a)
{
  var i;
  if (typeof(a)==='number' && a<1000 && a>0)
  {
    for (i=2;i*i<=a;i++)
	{
		if (a%i===0)
		{
			return('Число '+a+' - составное число');			
		}	
	}
	return('Число '+a+' - простое число');
  }
    return'Данные неверны';
}
module.exports = primeNumber;