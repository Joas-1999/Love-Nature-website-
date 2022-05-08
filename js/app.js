// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('i');

hamburger.addEventListener('click', e => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
});

