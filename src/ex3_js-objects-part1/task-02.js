'use strict'
var objectProperties=function(obj)
{
  var key;
  if (typeof(obj)==='object')
  {
    for (key in obj)
      {
        console.log(key,obj[key]);
      }
  }
  else
  {
    console.log('Это не объект');
  }
}
module.exports = objectProperties;