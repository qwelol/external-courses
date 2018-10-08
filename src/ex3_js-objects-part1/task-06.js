'use strict'
var deepClone=function(obj)
{
  var clone;
  var key;
  if (Array.isArray(obj))
  {
	clone=[];
  }
  else
  {
    clone={};
  }
  for (key in obj)
  {
	if (typeof(obj[key])==='object')
	{
	 clone[key] = deepClone(obj[key]);
	}
	else
	{
	 clone[key] = obj[key];
	}
  }  
  return clone;
}
module.exports = deepClone;