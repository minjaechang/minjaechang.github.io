// toggle button

const toggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarItem = document.querySelectorAll('.navbar__item');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

navbarItem.forEach((item) => {
  item.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
  });
});
