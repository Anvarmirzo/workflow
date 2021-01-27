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


    /* COUNTER */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /* COUNTER END */


    /* PROGRESS BAR ANIMATE */
    $('#progress-bar').waypoint(function () {
        $('.skill-per').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({ animatedValue: 0 }).animate({ animatedValue: per }, {
                duration: 1000,
                step: function () {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function () {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
            });
        });
    }, { offset: '50%' })


    /* PROGRESS BAR ANIMATE END*/

    /* GOOGLE MAP */
    /* ymaps.ready(init);
    function init() {
        // Создание карты.
        var map = new ymaps.Map("map", {
            center: [41.28603479, 69.23473703],
            zoom: 7,
            // controls: ['zoom'],
            behaviors: ['drag']
        });
    } */
    /* GOOGLE MAP END */
});


