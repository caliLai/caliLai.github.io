let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	// console.log(prevScrollpos);
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementsByTagName("nav")[0].style.top = "0";
	} else {
		document.getElementsByTagName("nav")[0].style.top = "-160px";
	}

	if(prevScrollpos <= window.screen.height * 0.5) {
		document.getElementById("home-link").classList.add("orange-underline");
		document.getElementById("about-link").classList.remove("orange-underline");
	} else {
		document.getElementById("about-link").classList.add("orange-underline");
		document.getElementById("home-link").classList.remove("orange-underline");
	}
	prevScrollpos = currentScrollPos;
}
