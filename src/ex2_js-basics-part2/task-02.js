"use strict";
var arrayInfo=function(array) 
{
  var i;
  if (Array.isArray(array))
  {
    for (i=0;i<array.length;i++)
    {
		console.log(array[i]);
    }

    console.log('Число элементов: '+array.length);
  }
  else
  {
    console.log('Это не массив');
  }
}
module.exports = arrayInfo;