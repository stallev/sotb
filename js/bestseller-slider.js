'use strict';

var left = 0;

document.querySelector('.bestsellers-slider__controls-prev').onclick = motionToLeft;
document.querySelector('.bestsellers-slider__controls-next').onclick = motionToRight;
var bestsellerContainer = document.querySelector('.bestsellers-slider__wrapper');
var bestsellersCount = document.getElementsByClassName('bestseller').length + 1;

function motionToLeft(){
  if(left > 1346 - 270*(bestsellersCount-2)){
    left += -270;
    bestsellerContainer.style.left = left + 'px';
  }
}
function motionToRight(){
  if(left < 1346 - 270*(bestsellersCount-2)){
    left += 270;
    bestsellerContainer.style.left = left + 'px';
  }
}
