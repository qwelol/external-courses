var accordion=document.getElementsByClassName('accordion');
accordion[0].onclick = function (event) 
{
	var target = event.target;
	var openedItem=accordion[0].querySelector('.open');
	if (target.tagName === 'DIV')
	{
		if (openedItem)
		{
			openedItem.classList.remove('open');
		}	
		if (openedItem !== target.parentNode)
		{
			target.closest('li').classList.add('open');
		}
	}
	else
	{
		return;   
	}
}