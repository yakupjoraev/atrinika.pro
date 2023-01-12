// Custom Scripts
// Custom scripts

// функция для constructor-1--1
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


