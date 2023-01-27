// Custom scripts

// функция для constructor--2-1

function sliderConstructor() {

  const container = document.querySelector('.constructor__slider')

  if (!container) {
    return null
  }

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
}

sliderConstructor()

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

// СЕЛЕКТЫ

class CustomSelector {
  data = []
  input = ''
  select = ''
  dropdown = ''

  constructor(id, data) {
    this.data = data
    this.input = document.querySelector(id)
  }

  async init() {
    this.input.value = this.data[0].value
    this.dropdown = new DOMParser()
      .parseFromString(await this.templateDropdown(), 'text/html')
      .querySelector('body')
      .querySelector('div')
    this.select = new DOMParser()
      .parseFromString(await this.templateSelect(), 'text/html')
      .querySelector('body')
      .querySelector('div')
    this.input.after(this.dropdown)
    this.input.after(this.select)
    this.event()
  }

  event() {
    this.select.addEventListener('click', () => {
      if (this.dropdown.classList.contains('active')) {
        this.dropdown.classList.remove('active')
        this.select.classList.remove('active')
      } else {
        this.dropdown.classList.add('active')
        this.select.classList.add('active')
      }
    })
    this.dropdown.querySelectorAll('[data-option]').forEach((option) => {
      option.addEventListener('click', (event) => {
        this.select.querySelector('[data-color]').style.backgroundColor = event.currentTarget.dataset.color
        this.select.querySelector('span').innerHTML = event.currentTarget.dataset.name
        this.input.value = event.currentTarget.dataset.value
        this.dropdown.classList.remove('active')
        this.select.classList.remove('active')
      })
    })
  }

  setValue() {
    this.el.value = this.value
  }

  async templateSelect(data = {}) {
    let template = `
              <div data-select class="select__input">
                <div data-color class="select__color" style="background-color: ${data.color ? data.color : this.data[0].color}"></div>
                <span data-name>${data.name ? data.name : this.data[0].name}</span>
              </div>
            `;
    return await template
  }

  async templateDropdown() {
    let template = `
              <div data-dropdown class="select__dropdown">
              <ul class="select__list">
          `;
    if (this.data) {
      this.data.forEach((item, key) => {
        template += `
                      <li data-option class="select__item" data-name="${item.name}" data-value="${item.value}" data-color="${item.color}" data-selected="${key == 0 ? true : false}">
                          <div class="item__color" style="background-color: ${item.color}"></div>
                          <span>${item.name}</span>
                      </li>
                  `;
      });
    }
    template += `
              </ul>
              </div>
          `;
    return await template
  }
}

let data = [
  {
    name: 'test1',
    value: 'value1',
    color: '#FF0000',
  },
  {
    name: 'test2',
    value: 'value2',
    color: '#C71585',
  },
  {
    name: 'test3',
    value: 'value3',
    color: '#808000',
  }
]
let colorTshirt = new CustomSelector('#color-tshirt', data)
let colorNumTshirt = new CustomSelector('#color-num-tshirt', data)
let colorShorts = new CustomSelector('#color-shorts', data)
let colorNumShorts = new CustomSelector('#color-num-shorts', data)
colorTshirt.init()
colorNumTshirt.init()
colorShorts.init()
colorNumShorts.init()
