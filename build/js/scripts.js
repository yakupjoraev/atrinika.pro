// Custom Scripts
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
  loop: true,
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
