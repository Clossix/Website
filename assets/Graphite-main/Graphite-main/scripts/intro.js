
function showIntro(popupClass){
	document.querySelector(".intro-outer-wrapper").style.display="block";
	document.querySelectorAll(".intro-inner-wrapper").forEach((popup) => { popup.style.display = "none"; });
    console.log(popupClass);
	document.querySelector("." + popupClass).style.display="block";

	return false;
}

function closeIntro(){
	document.querySelector(".intro-outer-wrapper").style.display="none";
	return false;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

if (n > slides.length) {
    slideIndex = 1
}    
if (n < 1) {
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}