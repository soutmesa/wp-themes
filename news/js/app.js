$(document).ready(function(){
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
		$('#form-search').slideDown("slow");
	});
	$('.fa.fa-times').click(function(){
		$('#form-search').slideUp("slow");
		$('#form-search').addClass("add-to-disable");
	});
});