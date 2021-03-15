window.addEventListener('DOMContentLoaded', () => {

    let position = 0;

    const slidesToShow = 1;
    const slidesToScroll = 1;

    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');
    const item = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const itemWidth = container.offsetWidth / slidesToShow;
    const itemCount = item.length;
    const movePosition = slidesToScroll * itemWidth;

    item.forEach(el => {
        el.style.minidth = `${itemWidth}px`;
    })

    prevBtn.addEventListener('click', () => {
        position += movePosition;

        setPosition();
        checkBtns();

    })

    nextBtn.addEventListener('click', () => {
        position -= movePosition;

        setPosition();
        checkBtns();

    })

    const setPosition = () => {
        track.style.transform = `translate(${position}px)`;
    }

    const checkBtns = () => {
      prevBtn.disabled = position === 0;
      nextBtn.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
    }


    checkBtns();

})