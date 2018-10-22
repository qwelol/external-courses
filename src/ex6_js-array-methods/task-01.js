'use strict'
var slice=function(arr,begin,end)
{
 var newArr=[],j=0,begin1,end1;
 begin1=begin;
 end1=end;
 if (isNaN(begin1))
 {
	begin1=0;
 } else if (begin1<0)
 {
	begin1=arr.length+(+begin1); 
 }
  if (isNaN(end1))
 {
	 end1=arr.length;
 }
 else if (end1<0)
 {
	end1=arr.length+(+end1); 
 }
 for (var i=begin1;i<end1;i++)
 {
	 newArr[j]=arr[i];
	 j++;
 }
 return newArr;
}
module.exports = slice;