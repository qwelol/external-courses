var tags={};
var classes={};
text=0;
function increaseCounter(store, key) 
{
 var storage=store;
 if (key in storage)
 {
  storage[key]++;	
 }
 else
 {
  storage[key]=1;	
 }
}
function scanDOM(elem)
{
 for (var i = 0; i < elem.childNodes.length; i++) 
 {
  if(elem.childNodes[i].nodeType == Node.ELEMENT_NODE)
  {
	for (var j=0; j<elem.childNodes[i].classList.length; j++)
	{
	 increaseCounter(classes, elem.childNodes[i].classList[j]);
	}
	increaseCounter(tags, elem.childNodes[i].localName);
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