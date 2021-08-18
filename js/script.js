menu = document.querySelector('.menu');
header = document.querySelector('.header__top');

menu.onclick = function() {

    header.classList.toggle('header__top--active');
};


let waypoint = new Waypoint({
    element: document.getElementById('point'),

    handler: function(direction) {
        if (direction = 'down') {
            header.classList.toggle('header__top--scroll');
        }
    }
})