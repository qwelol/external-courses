var openedItem;
var accordion=document.getElementsByClassName('accordion');
accordion[0].onclick = function (event) 
{
    var target = event.target;
    if (target.tagName === 'DIV')
	{
        open(target);
    }
    else
	{
		return;   
	}
}
function open(node) 
{
    if(openedItem !== node.parentNode)
	{
		if (openedItem)
		{
			openedItem.classList.remove('open');
		}
		openedItem=node.parentNode;
		openedItem.classList.add('open');
	}
	else
	{
		openedItem.classList.remove('open');
		openedItem=undefined;
	}
}