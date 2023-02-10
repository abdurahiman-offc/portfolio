console.log("ui")

const carousel =document.querySelector('.car-slides');
const slides = Array.from(carousel.children);
const prevbtn= document.querySelector('.left');
const nextbtn= document.querySelector('.right');

const slidewidth= slides[0].getBoundingClientRect().width;
// console.log(slidewidth);

// const slidepos = (slide, index) => {
//     slide.style.left= slidewidth + 'px';
// }
// slides[0].style.left= slidewidth * 0  + 'px';
// slides[1].style.left= slidewidth * 1  + 'px';
// slides[2].style.left= slidewidth * 2 +  'px'
// setting the slide position
const slidepos = (slide, index) =>{
    slide.style.left = slidewidth * index + 'px';
}

slides.forEach(slidepos);

// next button
nextbtn.addEventListener('click', e => {
 const currentslide= carousel.querySelector('.current-slide');
 const next = currentslide.nextElementSibling;
 console.log(next);
 const moveby = next.style.left;
 console.log(moveby);

 // moving
 carousel.style.transform = 'translateX(-'+ moveby + ')';
})


