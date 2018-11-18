var openedDiv;
var ul=document.getElementsByClassName('accordion');
ul[0].onclick = function (event) {
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
    if (openedDiv){
        openedDiv.classList.remove('open');
    }
    openedDiv=node.parentNode.querySelector('.accordion-body');
    openedDiv.classList.add('open');
}
