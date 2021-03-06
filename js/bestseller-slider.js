'use strict';
//slider for bestsellers
(function(){
  var left = 0;
  document.querySelector('.bestsellers-slider__controls-prev').onclick = motionToRight;
  document.querySelector('.bestsellers-slider__controls-next').onclick = motionToLeft;
  var bestsellerContainer = document.querySelector('.bestsellers-slider__wrapper');
  var bestsellersCount = document.getElementsByClassName('bestseller').length + 1;
  function getContainerLength(){
    
  }
  var container = document.querySelector('.container');
  var containerWidth = getComputedStyle(container).width;
  //console.log(containerWidth.indexOf('px'));
  var numberLength = containerWidth.indexOf('px');
  //console.log("numberLength " + numberLength);
  var containerWidthNumber = parseInt(containerWidth.substring(0, numberLength),10);
 //console.log("containerWidthNumber " + containerWidthNumber);


  function motionToLeft(){
    console.log("motionToLeft");
    if(left > containerWidthNumber - 270*(bestsellersCount-1)){
      left += -270;
      console.log("left is " + left);      
      bestsellerContainer.style.left = left + 'px';
    }
  }
  function motionToRight(){
    console.log("motionToRight");
    if (left < 0)
    {
      left += 270;
      console.log("left is " + left); 
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
