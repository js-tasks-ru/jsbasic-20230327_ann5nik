import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carouselSlides = '';

    for (let i = 0; i < this.slides.length; i++) {
      carouselSlides += `${createSlide(slides[i])}`;
    }

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${carouselSlides}
        </div>
      </div>
    `
    );

    initCarousel(this.elem);
    buttonClick(this.elem);
  }

}
function createSlide(slide) {
 return `<div class="carousel__slide" data-id="${slide.id}">
  <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
    <div class="carousel__title">${escapeHtml(slide.name)}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
    </div>
    </div>`;
}

function initCarousel(slider) {
    let slides = slider.querySelector('.carousel__inner');

    let button_left = slider.querySelector('.carousel__arrow_left');
    let button_right = slider.querySelector('.carousel__arrow_right');
    let position = 0;


    function swipeRight() {
      let slide_width = slides.children[0].offsetWidth;
      let allSlides_width = (slides.children.length - 1) * slide_width;
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
      let slide_width = slides.children[0].offsetWidth;
      let allSlides_width = (slides.children.length - 1) * slide_width;
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

function buttonClick(elem) {
  let buttons = elem.querySelectorAll('.carousel__button');

  for (let item of buttons) {
    item.addEventListener('click' , (event) => {
      let near = item.closest('.carousel__slide');
      let dataId = near.getAttribute('data-id');
      event.target.dispatchEvent(
        new CustomEvent("product-add", {
          detail: dataId,
          bubbles: true
        })
      );
    });
  };
}
