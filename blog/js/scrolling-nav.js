//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    $("#navigation .navbar").addClass("navbar-fixed-top");
    if ($("#navigation .navbar").offset().top > 45) {
        $("#navigation .navbar").addClass("navbar-fixed-top").addClass("top-nav-collapse");
        $("section#navigation > .navbar").addClass("add-border-bottom");
        $('#brand').addClass('small');
        $('.small-menu').hide();

    } else {
        $("#navigation .navbar").removeClass("navbar-fixed-top").removeClass("top-nav-collapse");
        $("section#navigation > .navbar").removeClass("add-border-bottom");
        $('#brand').removeClass('small');
        $('.small-menu').show();
        
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