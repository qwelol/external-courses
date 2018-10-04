"use strict";
var f=function (a) 
{
  if (typeof(a)==='string')
  {
    return('string');
  }
  else if (isNaN(a))
  {
    return undefined;
  }
  else if(typeof(a)==='number') 
    {
      return('number');
    }
 return undefined;
}
module.exports = f;