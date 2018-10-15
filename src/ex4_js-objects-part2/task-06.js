'use strict'
var upWord=function(str)
{ 
 var storage=str.split(' ');
 var result='';
 for (var i=0;i<storage.length;i++)
 {
	 result+=(storage[i][0].toUpperCase()+storage[i].slice(1,storage[i].length)+' ')
 }
 return result.trim(); 
}
module.exports = upWord;