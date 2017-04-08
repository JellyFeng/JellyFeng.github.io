var pagetop, menu, yPos;
function yScroll(){
	pagetop = document.getElementById('pagetop');
	menu = document.getElementById('menu');
	yPos = window.pageYOffset;
	if(yPos > 150){
		pagetop.style.height = "36px";
		pagetop.style.paddingTop = "8px";
		menu.style.height = "0px";
	} else {
		pagetop.style.height = "120px";
		pagetop.style.paddingTop = "50px";
		menu.style.height = "50px";
	}
}
window.addEventListener("scroll", yScroll);