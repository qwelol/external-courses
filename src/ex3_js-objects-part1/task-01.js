'use strict'
var f=function ()
{
  var obj= new Object ();
  obj.num=42;
  obj.str='mystr';
  obj.bool=true;
  delete obj.str;
}
module.exports = f;