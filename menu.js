// JavaScript for toggling the menu on smaller screens
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
