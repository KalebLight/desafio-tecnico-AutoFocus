const pageUpA = document.querySelector('[data-scroll="suave"] a[href^="#"]');
const header = document.querySelector('.header');
function scrollTop(event) {
  event.preventDefault();

  header.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

pageUpA.addEventListener('click', scrollTop);
