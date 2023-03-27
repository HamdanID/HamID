const menuHam = document.querySelector('.nav');
const navLinks = document.querySelector('.headerLinks');

menuHam.addEventListener('click', () => {
    navLinks.classList.toggle('mobi')
});