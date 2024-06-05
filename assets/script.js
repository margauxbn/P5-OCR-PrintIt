const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

function arrowClick(direction) {
	if (direction === "left") {
		alert("Clic flèche de gauche")
	} else {
		alert("Clic flèche de droite")
	}
};

arrowLeft.addEventListener("click", function() {
	arrowClick("left")
});

arrowRight.addEventListener("click", function() {
	arrowClick("right")
});