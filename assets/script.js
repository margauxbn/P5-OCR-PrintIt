/*const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
*/

const slides = [
	"./assets/images/slideshow/slide1.jpg", 
	"slideshow/slide2.jpg",
	"./assets/images/slideshow/slide3.jpg",
	"./assets/images/slideshow/slide4.png",
];

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
let bannerImage = document.getElementById("banner_image")

/*function arrowClick(direction) {
	if (direction === "right") {
		alert("précédent")
	} else {
		alert("suivant")
	}
};

arrowLeft.addEventListener("click", function() {
	arrowClick("left")
});

arrowRight.addEventListener("click", function() {
	arrowClick("right")
});
*/

function changeSlide() {
	document.getElementById("banner_image").src = "images/" + slides[2];
};


arrowLeft.addEventListener("click", function() {
	changeSlide(-1);
});
arrowRight.addEventListener("click", function() {
	changeSlide(1);
});