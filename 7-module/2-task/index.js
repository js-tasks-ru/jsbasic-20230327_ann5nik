import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`<div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>

          <div class="modal__body"></div>
        </div>
      </div>`);

      this.elem.addEventListener('click', (event) => {
        if (event.target != this.elem.querySelector('.modal__close')) return;
        this.close();
      })

      document.addEventListener('keydown', this.escape);
    }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
    document.removeEventListener('keydown', this.escape);
  }

  setTitle(modalTitle) {
    this.elem.querySelector('.modal__title').textContent = modalTitle;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(node);
  }

  escape = (event) => {
    if (event.code === 'Escape') {
      this.close();
    }
  }
}
