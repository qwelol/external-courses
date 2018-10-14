'use strict'
var searchKey=function(str, obj)
{
 if (str in obj)
 {
  return true;
 }
 return false;
}
module.exports = searchKey;