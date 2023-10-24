const select = document.querySelector('.custom-select__visible');
const selectHidden = document.querySelector('.custom-select__hidden');
const selectOption = document.querySelectorAll('.custom-select__option');
const selectedPlan = document.querySelector('.custom-select__visible-text');
const selectedPrice = document.querySelector('.custom-select__visible-price');
const selectedIcon = document.querySelectorAll('.custom-select__selected-icon');
const selectedToggle = document.querySelector('.custom-select__toggle-icon');

select.addEventListener('click', function (e) {
  selectedToggle.classList.toggle('rotate');
  selectHidden.classList.toggle('active');
});

selectOption.forEach((select) => {
  select.addEventListener('click', function (e) {
    selectOption.forEach((icon) => icon.classList.remove('selected'));
    this.classList.add('selected');
    selectHidden.classList.toggle('active');
    selectedIcon.forEach((icon) => icon.classList.toggle('rotate'));

    selectedPlan.textContent = this.childNodes[1].childNodes[1].innerText;
    selectedPrice.textContent = this.childNodes[1].childNodes[3].innerText;

    const data = this.getAttribute('data-value');

    this.parentElement.parentElement.setAttribute('data-value', data);
  });
});
