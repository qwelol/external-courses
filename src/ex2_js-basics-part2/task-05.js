"use strict";
var findMax=function(array)
{
  var max=0;
  var i;
  if (Array.isArray(array))
  {
	max=array[0];
    for (i=1;i<array.length;i++)
    {
      if (array[i]>max)
	  {
		  max=array[i];
	  }
    }
    console.log(max);
  }
  else
  {
    console.log('Это не массив'); 
  }
  return max;
}
module.exports = findMax;