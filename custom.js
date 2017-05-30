/* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function() {
    $('.preloader').fadeOut(1000);
    // set duration in brackets    
});

$(document).ready(function() {

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    /* jQuery to collapse the navbar on scroll
    -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /* Nivo lightbox
    -----------------------------------------------*/
    $('#portfolio .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });

    /* Parallax section
    -----------------------------------------------*/
    function initParallax() {
        $('#home').parallax("100%", 0.1);
        $('#service').parallax("100%", 0.3);
        $('#about').parallax("100%", 0.2);
        $('#counter').parallax("100%", 0.3);
        $('#portfolio').parallax("100%", 0.1);
        $('#contact').parallax("100%", 0.3);

    }
    initParallax();

    /* Divider Counter
    -----------------------------------------------*/
    jQuery('.counter-item').appear(function() {
        jQuery('.counter-number').countTo();
        jQuery(this).addClass('funcionando');
        console.log('funcionando');
    });

    /* wow
  -------------------------------*/
    new WOW({
        mobile: false
    }).init();

});
