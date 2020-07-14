$(function () {


    //====   preloader ====// 
    $(window).load(function () {
        $("#preloader").delay(500).fadeOut(500);
    });
    

    //====  sticky menu ====// 
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });

    
    //====   nav bar icon ====// 
    $('.nav-bar').click(function () {
        $(".nav-link").toggleClass("active");
    });
    $(".nav-bar").on('click', function () {
        $(this).toggleClass("active");
    });



    //==== close button mobile menu ====//  
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });


    //====  banner slider ====/  
    $('.banner_slider').slick({
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow',
        dots: false,
        vertical: false,
        infinite: false,
        speed: 1000,
        fade: false,
        autoplay: true,
        arrows: true,
        pauseOnHover: true,

    });



    //====  SmoothScroll ====/
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });


    //====portfolio  mixitup ====/
    var mixer = mixitup('#portfolio_part');



    //====  counterUp ====/ 
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });




});
