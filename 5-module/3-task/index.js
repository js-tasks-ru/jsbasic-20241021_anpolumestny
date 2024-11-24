function initCarousel() {
  let mainCarousel = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let currentOffset = 0;
  const slideWidth = mainCarousel.offsetWidth;
  const totalSlides = mainCarousel.children.length;

  function updateArrow() {
    arrowLeft.style.display = currentOffset === 0 ? 'none' : '';
    arrowRight.style.display = currentOffset === -(totalSlides - 1) * slideWidth ? 'none' : '';
  }

  function moveCarousel(direction, mainCarousel) {
    console.log(direction);
    console.dir(mainCarousel);

    if (direction === 'right') {
      currentOffset -= slideWidth;
    } else if (direction === 'left') {
      currentOffset += slideWidth;
    }
    const maxOffset = -((totalSlides - 1) * slideWidth);
    currentOffset = Math.max(Math.min(currentOffset, 0), maxOffset);
    mainCarousel.style.transform = `translateX(${currentOffset}px)`;
    updateArrow();
  }

  arrowRight.addEventListener('click', () => moveCarousel('right', mainCarousel));
  arrowLeft.addEventListener('click', () => moveCarousel('left', mainCarousel));
  updateArrow();
}




