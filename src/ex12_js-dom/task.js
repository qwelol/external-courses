var tags={};
var classes={};
text=0;
function scanDOM(elem)
{
 for (var i = 0; i < elem.childNodes.length; i++) 
 {
  if(elem.childNodes[i].nodeType == Node.ELEMENT_NODE)
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
	if (elem.childNodes[i].localName in tags)
	{
	 tags[elem.childNodes[i].localName]++;	
	}
	else
	{
	 tags[elem.childNodes[i].localName]=1;
	}
	if (elem.childNodes[i].hasChildNodes())
	{
	 scanDOM(elem.childNodes[i]);
	}
  }
  else if (elem.childNodes[i].nodeType == Node.TEXT_NODE)
  {
   text++;			
  }
 } 
};
scanDOM(document.body);
for (var key in tags)
{
 console.log('Тегов '+key + ': ' + tags[key]);   
}
console.log('Текстовых узлов: ' + text);
for (key in classes)
{
 console.log('Элементов с классом '+key + ': ' + classes[key]);
}