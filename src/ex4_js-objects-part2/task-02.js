'use strict'
var noProto=function()
{
 var obj = Object.create(null);
 return obj;
}
module.exports = noProto;