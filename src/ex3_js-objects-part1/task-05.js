'use strict'
var cloneObject=function(obj)
{
  var clone={}; 
  var key;
  for (key in obj)
   {
	clone[key]=obj[key];
   }
  return clone;
}
module.exports = cloneObject;