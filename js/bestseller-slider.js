'use string';
var nextSlideButton = document.getElementsByClassName('bestsellers-slider__controls-next');
var prevSlideButton = document.getElementsByClassName('bestsellers-slider__controls-prev');
var slideIndex = 1;
showSlides(slideIndex);
nextSlideButton.addEventlistener('click', plusSlides);
nextSlideButton.addEventlistener('click', plusSlides);
function plusSlides(){
  slideIndex += 1;
}
function minusSlides(){
  slideIndex -= 1;
}

function showSlides(n){
  var i;
  var slideshow = document.getElementsByClassName('bestseller');
  var slideshowPosition = [];
  
  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
