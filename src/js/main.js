// Custom scripts

// функция для constructor--1-1

function sports() {
  const container = document.querySelector('.constructor__sports')

  if (!container) {
    return null
  }

  let sportLables = document.querySelectorAll('[data-label]')

  sportLables.forEach(sportLable => {
    addEventListener('click', () => {
      container.setAttribute("data-checked", "checked")
    })
  });

}
sports();

// функция для constructor--2-1

let swiper = new Swiper('.constructor__slider-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.constructor__slider-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.constructor__slider-next',
    prevEl: '.constructor__slider-prev',
  },

  breakpoints: {
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }

});

// custom input file

/*
  By Mushfiq Shishir, hello@mrshishir.me, www.mrshishir.me	
*/

"use strict";

(function (document, window, index) {
  var inputs = document.querySelectorAll(".inputfile");
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener("change", function (e) {
      var fileName = "";
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
      else fileName = e.target.value.split("\\").pop();

      let textBefore = "Успешно загружен";
      let textafter = "Загрузить логотип";

      if (fileName) {
        label.querySelector(".download-logo__btn span").innerHTML = fileName;
        label.querySelector(".download-logo__btn p").innerHTML = textBefore;
        label.querySelector(".download-logo__btn").classList.add('js-success');
      }

      else {
        label.innerHTML = labelVal;
        label.querySelector(".download-logo__btn p").innerHTML = textafter;
        label.querySelector(".download-logo__btn").classList.remove('js-success');
      }
    });

    // Firefox bug fix
    input.addEventListener("focus", function () {
      input.classList.add("has-focus");
    });
    input.addEventListener("blur", function () {
      input.classList.remove("has-focus");
    });
  });
})(document, window, 0);



//jquery ui
$(function () {
  $("#collar-tshirt").selectmenu();
  $("#sleeve-tshirt").selectmenu();
  $("#size-tshirt").selectmenu();
  $("#size-shorts").selectmenu();
  $("#size-sleeve").selectmenu();
  $("#size-tshirt2").selectmenu();
  $("#size-shorts2").selectmenu();
  $("#size-sleeve2").selectmenu();
});

const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? 'placeholder не указан'

  const items = data.map(item => {
    let cls = ''
    if (item.id === selectedId) {
      text = item.value
      cls = 'selected'
    }
    return `
          <li class="select__item ${cls}" data-type="item" data-id="${item.id}">
          <div class="item__color" data-type="color"></div>${item.value}</li>
      `
  })
  return `
      <input type="hidden" class="hidden__input">
      <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input">
          <div class="select__color" data-type="color"></div>
          <span data-type="value">${text}</span>
      </div>
      <div class="select__dropdown">
          <ul class="select__list">
              ${items.join('')}
          </ul>
      </div>
  `
}
class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = options.selectedId

    this.render()
    this.setup()
  }

  render() {
    const { placeholder, data } = this.options
    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }
  setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    const { type } = event.target.dataset
    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id
    this.$value.textContent = this.current.value

    this.$el.querySelectorAll(`[data-type="item"]`).forEach(el => el.classList.remove('selected'))
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

    this.options.onSelect ? this.options.onSelect(this.current) : null
    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
  }

  close() {
    this.$el.classList.remove('open')
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.innerHTML = ''
  }
}


// Инициализация плагина
const select1 = new Select('#color-tshirt', {
  placeholder: 'Красный',
  selectedId: '1',
  data: [
    { id: '1', value: 'Красный 1' },
    { id: '2', value: 'Красный 2' },
    { id: '3', value: 'Красный 3' },
    { id: '4', value: 'Красный 4' },
    { id: '5', value: 'Красный 5' }, ,
  ],
  onSelect(item) {
    const input = document.querySelector('.hidden__input')
    input.value = item.value
  }

})

// Инициализация плагина
const select2 = new Select('#color-num-tshirt', {
  placeholder: 'Черный',
  selectedId: '1',
  data: [
    { id: '1', value: 'Черный 1' },
    { id: '2', value: 'Черный 2' },
    { id: '3', value: 'Черный 3' },
    { id: '4', value: 'Черный 4' },
    { id: '5', value: 'Черный 5' }, ,
  ],
  onSelect(item) {
    const input = document.querySelector('.hidden__input')
    input.value = item.value
  }

})

// Инициализация плагина
const select3 = new Select('#color-shorts', {
  placeholder: 'Белый',
  selectedId: '1',
  data: [
    { id: '1', value: 'Белый 1' },
    { id: '2', value: 'Белый 2' },
    { id: '3', value: 'Белый 3' },
    { id: '4', value: 'Белый 4' },
    { id: '5', value: 'Белый 5' }, ,
  ],
  onSelect(item) {
    const input = document.querySelector('.hidden__input')
    input.value = item.value
  }

})

// Инициализация плагина
const select4 = new Select('#color-num-shorts', {
  placeholder: 'Красный',
  selectedId: '1',
  data: [
    { id: '1', value: 'Красный 1' },
    { id: '2', value: 'Красный 2' },
    { id: '3', value: 'Красный 3' },
    { id: '4', value: 'Красный 4' },
    { id: '5', value: 'Красный 5' }, ,
  ],
  onSelect(item) {
    const input = document.querySelector('.hidden__input')
    input.value = item.value
  }

})
