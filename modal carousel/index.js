const open = document.querySelector('#open-modal');
open.addEventListener('click', function(){
    document.querySelector('#overlay').style.display = 'block';
});

const close = document.querySelector('#close-modal');
close.addEventListener('click', function(){
    document.querySelector('#overlay').style.display = 'none';
});

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides(){
for(let slide of slides){
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
}
}

function moveToNextSlide() {
// console.log('move to next slide');
hideAllSlides();
if(slidePosition === totalSlides -1){
    slidePosition = 0;
}else {
    slidePosition++;
}
slides[slidePosition].classList.add('carousel-item-visible');

}

function moveToPrevSlide() {
    // console.log('move to prev slide');
    hideAllSlides();
    if(slidePosition === 0){
        slidePosition = totalSlides -1;
    }else{
        slidePosition --;
    }
    slides[slidePosition].classList.add('carousel-item-visible');
}
// console.log(totalSlides);