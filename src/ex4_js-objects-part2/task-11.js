'use strict'
var charCount=function(str)
{
 var storage={};
 var items=str.split('');
 for (var i = 0; i < items.length; i++) 
 {
  if (items[i] in storage)
  {
	storage[items[i]]++;
  }
  else
  {
	storage[items[i]]=1;  
  }
 }
 for (var key in storage)
 {
	 console.log(key,storage[key]);
 }
}
module.exports = charCount;