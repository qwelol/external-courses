'use strict'
var filter=function(arr,callback)
{
 var output=[],j=0; 
 for(var i=0;i<arr.length;i++)
 {
	 if (callback(arr[i],i,arr))
	 {
		output[j]=arr[i];
	    j++;
	 }
 }
 return output;
}
module.exports = filter;