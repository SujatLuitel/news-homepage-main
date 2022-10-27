const ham = document.getElementById('hamburger');
const menu = document.getElementById('nav');
const darkBg = document.getElementById('dark-bg');

ham.addEventListener('click', () => {
    ham.classList.toggle('show');
    menu.classList.toggle('show');
    darkBg.classList.toggle('show');

})