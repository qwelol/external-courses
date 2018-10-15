'use strict'
var upFirst=function(str)
{ 
 return str[0].toUpperCase()+str.slice(1,str.length);
}
module.exports = upFirst;