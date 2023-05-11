import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(`<div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>`);

    for (let item of this.categories) {
      let a = createElement(`<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`);
      this.elem.querySelector('.ribbon__inner').append(a);
      a.addEventListener('click', (event) => {
        event.preventDefault();

        let activeLink = this.elem.querySelector('.ribbon__item_active');

        if (activeLink) {
          activeLink.classList.remove('ribbon__item_active');
        }

        a.classList.add('ribbon__item_active');

        this.elem.dispatchEvent(
          new CustomEvent('ribbon-select', {
            detail: a.getAttribute('data-id'),
            bubbles: true
          })
        );
      });
    }

    initRibbon(this.elem);
  }
}

function initRibbon(ribbon) {
      let button_left = ribbon.querySelector('.ribbon__arrow_left');
      let button_right = ribbon.querySelector('.ribbon__arrow_right');
      let ribbonInner = ribbon.querySelector('.ribbon__inner');

      button_left.addEventListener('click', scrollLeft);
      button_right.addEventListener('click', scrollRight);

      function scrollLeft() {
        let scrollLeft = ribbonInner.scrollLeft;
        let scrollRight = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth;

        ribbonInner.scrollBy(-350, 0);

        if (scrollRight >= 0) {
          button_right.classList.add('ribbon__arrow_visible');
        }

        if (scrollLeft <= 350) {
          button_left.classList.remove('ribbon__arrow_visible');
        }
      };


      function scrollRight() {
        let scrollRight = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth;

        ribbonInner.scrollBy(350, 0);

        if (ribbonInner.scrollLeft >= 0) {
          button_left.classList.add('ribbon__arrow_visible');
        }

        if (scrollRight < 350) {
          button_right.classList.remove('ribbon__arrow_visible');
        }
      }
    }
