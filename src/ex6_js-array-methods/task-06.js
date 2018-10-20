'use strict'
var reduce=function(arr,callback,initialValue)
{
 var previousValue,i; 
 if (isNaN(initialValue))
 {
	 previousValue=arr[0];
	 i=1;
 }
 else
 {
	previousValue=initialValue;
	i=0;
 }
 for(;i<arr.length;i++)
 {
	previousValue=callback(previousValue, arr[i], i, arr)
 }
 return previousValue;
}
module.exports = reduce;