menu = document.querySelector('.menu');

menu.onclick = function() {
    header = document.querySelector('.header__top');

    header.classList.toggle('header__top--active')
}