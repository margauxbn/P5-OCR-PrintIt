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

let i = 0;

let bannerImage = document.getElementById("banner_image");
let bannerParagraph = document.getElementById("banner_paragraph");
let dot = document.getElementsByClassName(".dot");


function changeSlide(direction) {
	i = i + direction;

	if (i > slides.length - 1) {
		i = 0;
	} if (i < 0) {
		i = slides.length - 1;
	};

	bannerImage.src = "./assets/images/slideshow/" + slides[i].image;
	//bannerParagraph.innerHTML = slides[i].tagLine;	
};


arrowLeft.addEventListener("click", function() {
	changeSlide(-1);
});
arrowRight.addEventListener("click", function() {
	changeSlide(1);
});
