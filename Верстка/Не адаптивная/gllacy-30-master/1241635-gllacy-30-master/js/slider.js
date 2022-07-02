//Управление слайдерами
let slideIndex = 1;
let slideButtons = document.querySelectorAll(".slider-controls-button");
let slides = document.querySelectorAll(".slider-item"); 
let indexBody = document.querySelector(".index-body"); 

function showSlides(n) {
    if (n != slideIndex){
        slideButtons[slideIndex - 1].classList.remove("current");
        slideButtons[n - 1].classList.add("current");  
        slides[slideIndex - 1].classList.remove("slider-show");
        slides[n - 1].classList.add("slider-show");
        indexBody.classList.replace("site-wrapper-"+ slideIndex, "site-wrapper-"+ n );
        slideIndex = n; 
    }
}

