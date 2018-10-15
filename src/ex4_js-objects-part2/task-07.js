'use strict'
var cutStr=function(str,num)
{ 
 var result='';
 if (str.length>num)
 {
  result=str.slice(0,(num-1))+'…';
 }
 else
 {
  result=str;
 }
 return result;
}
module.exports = cutStr;