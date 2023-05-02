function initCarousel() {
  let slides = document.querySelector('.carousel__inner');

  let button_left = document.querySelector('.carousel__arrow_left');
  let button_right = document.querySelector('.carousel__arrow_right');
  let slide_width = slides.children[0].offsetWidth;
  let position = 0;
  let allSlides_width = (slides.children.length - 1) * slide_width;

  function swipeRight() {
    if (position == (allSlides_width - slide_width)) {
      button_right.style.display = 'none';
    }

    if (position >= 0) {
      button_left.style.display = '';
    }

    if (position >= allSlides_width) {
      return;
    }

    position += slide_width;
    slides.style.transform = `translateX(-${position}px)`;
  }

  button_left.style.display = 'none';

  function swipeLeft() {
    if (position == slide_width) {
      button_left.style.display = 'none';
    }

    if (position !== (allSlides_width - slide_width)) {
      button_right.style.display = '';
    }

    if (position <= 0) {
      return;
    }

    position = position - slide_width;
    slides.style.transform = `translateX(-${position}px)`;
  }


  button_right.addEventListener('click', swipeRight);
  button_left.addEventListener('click', swipeLeft);
}
