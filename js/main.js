const toggle = document.querySelector('.menu-icon');

toggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active-nav');
});