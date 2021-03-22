const slide = document.querySelector('.slider-track');
const images = document.querySelectorAll('.slider-track img');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const bubbles = document.querySelectorAll('.bubbles i')

let counter = 1;

const imageWidth = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';

bubbles[counter - 1].classList.add('active');
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
})

slide.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastPic') {
        slide.style.transition = 'none';
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
    }
    if (images[counter].id === 'firstPic') {
        slide.style.transition = 'none';
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
    }

    bubbles.forEach(bub => {
        bub.classList.remove('active');
    })

    bubbles[counter - 1].classList.add('active');
})

bubbles.forEach((bub, inx) => {
    bub.addEventListener('click', () => {
        counter = inx + 1;
        console.log(counter)
        slide.style.transition = 'transform 0.4s ease-in-out';
        slide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
        bub.classList.add('active');
    })
})









