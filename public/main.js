// Navbar

// Handle scrolling when tapping on the navbar item
const navbarItem = document.querySelectorAll('.navbar__item');
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link === null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// toggle button
const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

navbarItem.forEach((item) => {
  item.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
  });
});
