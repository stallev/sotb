'use string';
var initialLeftPosition =0;
var initialRightPosition =0;
var nextSlideButton = document.getElementsByClassName('bestsellers-slider__controls-next');
var prevSlideButton = document.getElementsByClassName('bestsellers-slider__controls-prev');
var allBestsellers = document.getElementsByClassName('bestseller');
var bestseller = allBestsellers[0];
var bestsellerLength = parseFloat(bestseller.style.length);
var bestsellerMargin = 0;

nextSlideButton.addEventlistener('click', toNextBestseller);
prevSlideButton.addEventlistener('click', toPrevBestseller);

function toNextBestseller(){
  initialLeftPosition += 1;
  if (initialLeftPosition < allBestsellers.length -5) {
    bestsellerContainer.style.marginLeft = initialLeftPosition * bestsellerLength;
  }
}
function toPrevBestseller(){
  if (initialLeftPosition > 0) {
    initialLeftPosition -=1;
    bestsellerContainer.style.marginLeft = initialLeftPosition * bestsellerLength;
  }
}
