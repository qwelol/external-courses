var tags={};
var classes={};
tags.text=0;
function scanDOM(elem){
 for (var i = 0; i < elem.childNodes.length; i++) 
 {
  if(elem.childNodes[i].nodeType === 1)
	{
	  if(!!elem.childNodes[i].classList)
	  {
		for (var j=0; j<elem.childNodes[i].classList.length; j++)
		{
			if (elem.childNodes[i].classList[j] in classes)
			{
			 classes[elem.childNodes[i].classList[j]]++;	
			}
			else
			{
			 classes[elem.childNodes[i].classList[j]]=1;	
			}
		}
	  }
	  if (elem.childNodes[i].localName in tags)
	   {
		if (elem.childNodes[i].hasChildNodes())
		 {
		  tags[elem.childNodes[i].localName]++;
		  scanDOM(elem.childNodes[i]);
		 }
		else
		 {
			tags[elem.childNodes[i].localName]++;  
		 }
	   }
	   else
		{
		  if (elem.childNodes[i].hasChildNodes())
		   {
			tags[elem.childNodes[i].localName]=1;
			scanDOM(elem.childNodes[i]);
		   }
		  else
		   {
			tags[elem.childNodes[i].localName]=1;  
		   }
		}
	}
	else if (elem.childNodes[i].nodeType === 3)
	{
	 tags.text++;			
	}
  }
};
scanDOM(document.body);
for (var key in tags)
 {
  if (key !== 'text')
   {
	console.log('Тегов '+key + ': ' + tags[key]);
   }
   else
   {
	console.log('Текстовых узлов: ' + tags[key]);   
   }
 }
 for (key in classes)
 {
  console.log('Элементов с классом '+key + ': ' + classes[key]);
 }