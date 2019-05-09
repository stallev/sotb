'use strict';
//slider for bestsellers
(function(){
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
})();

//goods slider
var index = 1;
showSlides(index);
function minusSlide(){
  index -= 1;
  showSlides(index);
};
function plusSlide(){
  index +=1;
  showSlides(index);
};
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName('goods-slider__item');
  var indikators= document.getElementsByClassName('goods-slider__indicators-item');
  document.querySelector('.goods-slider__controls-prev').onclick = minusSlide;
  document.querySelector('.goods-slider__controls-next').onclick = plusSlide;
  if (n > slides.length){
    index = 1;
  }
  if (n < 1){
    index = slides.length;
  }
  for (i=0; i< slides.length; i++){
    slides[i].style.display = 'none';
    indikators[i].style.backgroundColor = 'inherit';
  }
  slides[index - 1].style.display = 'block';
  indikators[index - 1].style.backgroundColor = '#ffffff';
};
