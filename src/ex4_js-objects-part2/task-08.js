'use strict'
var toCamelCase=function(str)
{	
 var storage=str.split(' ');
 var result=storage[0].toLowerCase();
 for (var i=1;i<storage.length;i++)
 {
	 result+=(storage[i][0].toUpperCase()+storage[i].slice(1,storage[i].length).toLowerCase())
 }
 return result; 
}
module.exports = toCamelCase;