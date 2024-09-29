const elements = document.querySelectorAll('.slider .slider_line .slider_elem');
const sliderLine = document.querySelector('.slider_line');
const sliderMain = document.querySelector('.slider');

const screenWidth = window.screen.width
const screenHeight = window.screen.height

let count = 0;
let width;
let heightSlider;
let key_screen = true;


if(matchMedia){
    var screen = window.matchMedia("(max-width: 780px)");
    screen.addListener(changes);
    changes(screen);
}
function changes(screen){
    if(screen.matches){
        console.log("<780px");
        key_screen = false;
        console.log(key_screen);
    }
    else{
        key_screen = true;
        console.log(key_screen);
    }
}

    window.addEventListener('resize', init);
    init();


// функции для слайдера (десктоп)

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*elements.length + 'px';
    if(key_screen == true){
    elements.forEach( item => {
        item.style.width = width/3 + 'px';
        item.style.height = width/2.15 + 'px';
        heightSlider = width/2.15;
    });
    }
    else{
    elements.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = width/0.8 + 'px';
        heightSlider = width/0.8;
    })}
    sliderMain.style.height = heightSlider + 'px';
    rollSlider();
}

document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0){
        count = elements.length - 2;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= elements.length - 1){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    if(key_screen == true){
        sliderLine.style.transform = 'translate(-'+count*width/3+'px)';
    }
    else{
        sliderLine.style.transform = 'translate(-'+count*width+'px)';
    }
}

// функции для слайдера (мобильная версия)