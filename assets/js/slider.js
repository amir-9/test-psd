$(document).ready(function () {
    $('#first').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true
    });
    $('#second').owlCarousel({
        nav: true,
        loop: true,
        rtl: true,
        dots:false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            991: {
                items: 3,
                nav: true
            }
        }
    })
    $('#third').owlCarousel({
        nav: true,
        dots:false,
        rtl:true,
        loop: true,
        margin: 30,
        autoplay: false,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            576: {
                items: 3.5,
                nav: true
            },
            768: {
                items: 4.5,
                nav: true
            },
            1200: {
                items: 5.5,
                nav: true
            }
        }
    });
});














