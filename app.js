const slider = document.querySelector('.slider_images');
const sliderImages = document.querySelectorAll('.slider_images img');

const prevBtn = document.querySelector('.slide_left');
const nextBtn = document.querySelector('.slide_right');


let counter = 1;
const size = 950;
console.log(size);

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', ()=> {

    if (counter >= 2) {
        nextBtn.disable = true;
    } else { 
    
   slider.style.transition = "transform 0.4s ease-in-out";
   counter++;
   slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
   
   console.log(counter);
}
});

prevBtn.addEventListener('click', ()=> {

    if (counter <= 0) {
        prevBtn.disable = true;
    } else { 

    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    
    console.log(counter);
    }
});
