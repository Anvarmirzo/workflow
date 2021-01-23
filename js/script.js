document.addEventListener("DOMContentLoaded", () => {

    /* HIDING NAVBAR WITH ADDING CLASS */
    function hideNav() {
        let mediaQuery = window.matchMedia('(max-width: 767.98px)');
        let navbar = document.getElementById('navbarToggler');

        if (mediaQuery.matches === true) {
            navbar.classList.add('close');
        }
        else {
            navbar.classList.remove('close');
        }
    }
    hideNav();
    /* HIDING NAVBAR WITH ADDING CLASS END*/


    /* NAVBURGER */
    function navburger() {
        let burger = document.getElementById('navburger');
        let navbar = document.getElementById('navbarToggler');
        let burgerBars = document.querySelector('.fa-bars');
        let burgerClose = document.querySelector('.fa-close');

        burger.addEventListener('click', function (e) {
            navbar.classList.toggle('close');
            if (!navbar.classList.contains("close")) {
                document.body.style.overflow = 'hidden';
                burgerClose.style.display = 'block';
                burgerBars.style.display = 'none';
            }
            else {
                burgerClose.style.display = 'none';
                burgerBars.style.display = 'block';
                document.body.style.overflow = 'visible';
            }
        });
    }
    navburger();
    /* NAVBURGER END*/


    /* GOOGLE MAP */
    /* ymaps.ready(init);
    function init() {
        // Создание карты.
        var map = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [41.28603479, 69.23473703],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7,
            // controls: ['zoom'],
            behaviors: ['drag']
        });
    } */
    /* GOOGLE MAP END */
});


