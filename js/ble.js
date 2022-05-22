var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

$(document).ready(function(){
    $("a.about").click(function(){
        window.scrollTo(0,550)
    });
    $("a.contact").click(function(){
        window.scrollTo(0,1930)
    });
    });