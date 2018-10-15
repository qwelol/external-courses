'use strict'
var findStr=function(str,find)
{ 
 if (str.lastIndexOf(find)!==-1)
 {
	return true;
 }
 return false;
}
module.exports = findStr;