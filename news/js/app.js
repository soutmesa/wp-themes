$(document).ready(function(){
	// $('.small-menu').hide();
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$('#search').click(function(){
		$('#form-search').slideToggle("500", "easeInOutCirc");
		$(this).addClass('close-form');
		return false;
	});
	$('.close-form').click(function(){
		$('#form-search').slideToggle("500", "easeInOutCirc");
		$('#form-search').addClass("add-to-disable");
	});
});