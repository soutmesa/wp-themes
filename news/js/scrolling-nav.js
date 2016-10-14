//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    // $("#navigation .navbar").addClass("navbar-fixed-top");
    if ($("#navigation .navbar").offset().top > 50) {
        $("#navigation .navbar").addClass("navbar-fixed-top");
        $("#navigation .navbar").addClass("top-nav-collapse");
    } else {
        $("#navigation .navbar").removeClass("top-nav-collapse");
        $("#navigation .navbar").removeClass("navbar-fixed-top");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});