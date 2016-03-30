$(function () {

	$('.flexslider').flexslider({
		animation: "slide",
		slideshowSpeed: 4000,
		pauseOnHover: true,
		directionNav: false,


	});


// TABBED MODULE MENU CLICK FUNCTIONS

$('.tmi-blue-1').on('click', function() {
  $('.tabbed-module-content').hide();
  $('.tmc-1').show();
});

$('.tmi-blue-2').on('click', function() {
	$('.tabbed-module-content').hide();
	$('.tmc-2').show();
  	console.log ('this is the tmc-2 funtion')
});

$('.tmi-blue-3').on('click', function() {
	$('.tabbed-module-content').hide();
	$('.tmc-3').show();
  	console.log ('this is the tmc-3 funtion')
});

$('.tmi-blue-4').on('click', function() {
	$('.tabbed-module-content').hide();
	$('.tmc-4').show();
  	console.log ('this is the tmc-4 funtion')
});


});