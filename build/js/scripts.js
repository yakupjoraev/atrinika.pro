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
  $("#color-tshirt").selectmenu();
  $("#collar-tshirt").selectmenu();
  $("#sleeve-tshirt").selectmenu();
  $("#color-num-tshirt").selectmenu();
  $("#color-shorts").selectmenu();
  $("#color-num-shorts").selectmenu();
  $("#size-tshirt").selectmenu();
  $("#size-shorts").selectmenu();
  $("#size-sleeve").selectmenu();
  $("#size-tshirt2").selectmenu();
  $("#size-shorts2").selectmenu();
  $("#size-sleeve2").selectmenu();
});
