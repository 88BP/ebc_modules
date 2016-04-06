$(function () {

console.log("haiiiiii");

	$('#fitness-photo-slider').flexslider({
		animation: "slide",
		slideshowSpeed: 4000,
		pauseOnHover: true,
		controlNav:false,
		directionNav: false,


	});

	$('#fitness-content-slider').flexslider({
		animation: "slide",
		slideshowSpeed: 4000,
		pauseOnHover: true,
		controlNav:false,
		directionNav: false,


	});




// flexslider click functions
	$('.fmi-red-1').on('click', function (){
		$('.flexslider').flexslider(0);
	})
	$('.fmi-red-2').on('click', function (){
		$('.flexslider').flexslider(1);
	})
	$('.fmi-red-3').on('click', function (){
		$('.flexslider').flexslider(2);
	})

	$('.fmi-red-4').on('click', function (){
		$('.flexslider').flexslider(3);
		console.log("flexslider omgggggg")
	})
	$('.fmi-red-5').on('click', function (){
		$('.flexslider').flexslider(4);
	})



// TABBED MODULE MENU CLICK FUNCTIONS

var currentActiveTab = 'tmi-blue-1-active';

$('.tmi-blue-1').on('click', function() {
  	$('.tabbed-module-content').hide();
		$('.tmi-blue-1').addClass('tmi-blue-1-active');
  	$('.tmc-1').show();

		if (currentActiveTab !== 'tmi-blue-1-active') {
				$('.tabbed-menu-item').removeClass(currentActiveTab);
				currentActiveTab=$(this).attr('class').split(' ').pop();
		}

});

$('.tmi-blue-2').on('click', function() {

	$('.tabbed-module-content').hide();
	$('.tmi-blue-2').addClass('tmi-blue-2-active');
	$('.tmc-2').show();

	if (currentActiveTab !== 'tmi-blue-2-active') {
			$('.tabbed-menu-item').removeClass(currentActiveTab);
			currentActiveTab=$(this).attr('class').split(' ').pop();
	}
});

$('.tmi-blue-3').on('click', function() {
	$('.tabbed-module-content').hide();
	$('.tmi-blue-3').addClass("tmi-blue-3-active");
	$('.tmc-3').show();
	if (currentActiveTab !== 'tmi-blue-3-active') {
			$('.tabbed-menu-item').removeClass(currentActiveTab);
			currentActiveTab=$(this).attr('class').split(' ').pop();
	}
});

$('.tmi-blue-4').on('click', function() {
	$('.tabbed-module-content').hide();
	$('.tmi-blue-4').addClass("tmi-blue-4-active");
	$('.tmc-4').show();
	if (currentActiveTab !== 'tmi-blue-4-active') {
			$('.tabbed-menu-item').removeClass(currentActiveTab);
			currentActiveTab=$(this).attr('class').split(' ').pop();
	}
});


});
