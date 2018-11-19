var openedDiv;
var accordion=document.getElementsByClassName('accordion');
accordion[0].onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'DIV'){
        open(target);
    }
    else{
     return;   
	}
}
function open(node) {
    console.log(openedDiv);
    if(openedDiv!==node)
	{
		if (openedDiv){
		 for(var i=0; i<openedDiv.parentNode.children.length; i++)
		 {
		  openedDiv.parentNode.children[i].classList.remove('open');
		 }
		}
		openedDiv=node;
		for(i=0; i<openedDiv.parentNode.children.length; i++)
		{
		 openedDiv.parentNode.children[i].classList.add('open');
		}
	}
	else
	{
	 for(i=0; i<openedDiv.parentNode.children.length; i++)
	 {
	  openedDiv.parentNode.children[i].classList.remove('open');
	 }
	 openedDiv=undefined;
	}
}
