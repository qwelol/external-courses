'use strict'
var map=function(arr,callback)
{
 var output=[]; 
 for(var i=0;i<arr.length;i++)
 {
	output[i]=callback(arr[i],i,arr);
 }
 return output;
}
module.exports = map;