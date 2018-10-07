"use strict";
var numberCount=function(array) 
{
  var even=0;
  var odd=0;
  var zero=0;
  var i;
  if (Array.isArray(array))
  {
    for (i=0;i<array.length;i++)
    {
	if (typeof(array[i])==='number' && !isNaN(array[i]))
	{
		if (array[i]===0)
		  {
			zero++;
		  }
		else if (array[i]%2===0)
		 {
			even++;
		 }
		else
		 {
			 odd++;
		 }
	}
    }
    console.log('Четных:'+ even + ' Нечетных:' + odd + ' Нуль:'+zero);
  }
  else
  {
    console.log('Это не массив');
  }
  return [even,odd,zero];
}
module.exports = numberCount;