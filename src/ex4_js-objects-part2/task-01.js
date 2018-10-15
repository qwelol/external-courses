'use strict'
var searchProtoKey=function(str, obj)
{
 var value;
 if (str in obj.__proto__)
 {
   value=obj.__proto__[str];
 }
 return value;
}
module.exports = searchProtoKey;