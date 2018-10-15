'use strict'
var insStr=function(str, substr, pos)
{	
 var storage=str.split(' ');
 var result='';
 for (var i=0;i<storage.length;i++)
 {
	 if (i===pos)
	 {
		result+=' '+storage[i]+' '+ substr;
	 }
	 else
	 {
		result+=' '+storage[i]; 
	 }
 }
 return result.trim(); 
}
module.exports = insStr;