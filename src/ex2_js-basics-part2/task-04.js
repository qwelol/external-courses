"use strict";
var identicalArray=function(array) 
{
  var flag=true;
  var i;
  var j
  if (Array.isArray(array))
  {
    for (i=0;i<array.length;i++)
    {
      for (j=0;j<array.length;j++)
	  {
		  if (array[i]!==array[j])
		  {
			  flag=false;
			  console.log(flag);
			  return flag;
		  }
	  }
	  
    }
	console.log(flag);
  }
  else
  {
    console.log('Это не массив');
  }
  return flag;
}
module.exports = identicalArray;
