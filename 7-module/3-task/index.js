import createElement from "../../assets/lib/create-element";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = createElement(`<div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress" style = "width: 0%;"></div>
      <div class="slider__steps">
      </div>
    </div>`);

    this.crateSteps();
    this.changeSliderValue();
  }

  crateSteps() {
    let sliderSteps = this.elem.querySelector('.slider__steps');
    let step = '';

    for (let i = 0; i < this.steps; i++) {
      step += '<span></span>';
    }

    sliderSteps.innerHTML = step;
    sliderSteps.children[this.value].classList.add('slider__step-active');
  }

  changeSliderValue() {
    this.elem.addEventListener('click', (event) => {
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      let sliderValue = this.elem.querySelector('.slider__value');
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let activeSteps = this.elem.querySelector('.slider__step-active');
      activeSteps.classList.remove('.slider__step-active');
      let sliderSteps = this.elem.querySelector('.slider__steps');
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;

      thumb.style.left = valuePercents + '%';
      progress.style.width = valuePercents + '%';
      sliderValue.textContent = value;
      sliderSteps.children[value].classList.add('slider__step-active')
    })

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    )
  }


}
