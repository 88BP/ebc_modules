$(function () {

console.log("haiiiiii");

	$('#fitness-photo-slider').flexslider({
		animation: "slide",
		easing: "swing",
		slideshowSpeed: 4000,
		pauseOnHover: true,
		controlNav:false,
		directionNav: false,
		after: function(slider){ 
        slider.pause(); 
        slider.play(); 
    }
    


	});

	$('#fitness-content-slider').flexslider({
		animation: "slide",
		easing: "swing",
		slideshowSpeed: 4000,
		pauseOnHover: true,
		controlNav:false,
		directionNav: false,
		sync: '#fitness-photo-slider',
		after: function(slider){ 
        slider.pause(); 
        slider.play(); 

        var currentSlide=$('#fitness-content-slider').data('flexslider').currentSlide
   

		console.log(currentSlide);

		if (currentSlide === 0) {
			$('.fitness-menu-item').removeClass('fmi-red-1-active fmi-red-2-active fmi-red-3-active fmi-red-4-active fmi-red-5-active')
			$('.fmi-red-1').addClass('fmi-red-1-active');
		}
		if (currentSlide === 1) {
			$('.fitness-menu-item').removeClass('fmi-red-1-active fmi-red-2-active fmi-red-3-active fmi-red-4-active fmi-red-5-active')
			$('.fmi-red-2').addClass('fmi-red-2-active');
		}
		if (currentSlide === 2) {
			$('.fitness-menu-item').removeClass('fmi-red-1-active fmi-red-2-active fmi-red-3-active fmi-red-4-active fmi-red-5-active')
			$('.fmi-red-3').addClass('fmi-red-3-active');
		}
		if (currentSlide === 3) {
			$('.fitness-menu-item').removeClass('fmi-red-1-active fmi-red-2-active fmi-red-3-active fmi-red-4-active fmi-red-5-active')
			$('.fmi-red-4').addClass('fmi-red-4-active');
		}
		if (currentSlide === 4) {
			$('.fitness-menu-item').removeClass('fmi-red-1-active fmi-red-2-active fmi-red-3-active fmi-red-4-active fmi-red-5-active')
			$('.fmi-red-5').addClass('fmi-red-5-active');
		}

    }


	});

	$('.primary-fitness-module').mouseenter(function(){
		$('#fitness-photo-slider').flexslider('pause');
		$('#fitness-content-slider').flexslider('pause');
	});

	$('.primary-fitness-module').mouseleave(function(){
		$('#fitness-photo-slider').flexslider('play');
		$('#fitness-content-slider').flexslider('play');
	});




// flexslider click functions


var currentFitnessTab = 'fmi-red-1-active';

	$('.fmi-red-1').on('click', function (){
		$('#fitness-photo-slider').flexslider(0);
		$('#fitness-content-slider').flexslider(0);
		$('.fmi-red-1').addClass('fmi-red-1-active');
		
		if (currentFitnessTab !== 'fmi-red-1-active') {
				$('.fitness-menu-item').removeClass(currentFitnessTab);
				currentFitnessTab=$(this).attr('class').split(' ').pop();
		}

		
	});
	$('.fmi-red-2').on('click', function (){
		$('#fitness-photo-slider').flexslider(1);
		$('#fitness-content-slider').flexslider(1);
		$('.fmi-red-2').addClass('fmi-red-2-active');

		if (currentFitnessTab !== 'fmi-red-2-active') {
				$('.fitness-menu-item').removeClass(currentFitnessTab);
				currentFitnessTab=$(this).attr('class').split(' ').pop();
		}
		
	});
	$('.fmi-red-3').on('click', function (){
		$('#fitness-photo-slider').flexslider(2);
		$('#fitness-content-slider').flexslider(2);
		$('.fmi-red-3').addClass('fmi-red-3-active');

		if (currentFitnessTab !== 'fmi-red-3-active') {
				$('.fitness-menu-item').removeClass(currentFitnessTab);
				currentFitnessTab=$(this).attr('class').split(' ').pop();
				
		}
		
	});

	$('.fmi-red-4').on('click', function (){
		$('#fitness-photo-slider').flexslider(3);
		$('#fitness-content-slider').flexslider(3);
		$('.fmi-red-4').addClass('fmi-red-4-active');

		if (currentFitnessTab !== 'fmi-red-4-active') {
				$('.fitness-menu-item').removeClass(currentFitnessTab);
				currentFitnessTab=$(this).attr('class').split(' ').pop();
		};
	
	})
	$('.fmi-red-5').on('click', function (){
		$('#fitness-photo-slider').flexslider(4);
		$('#fitness-content-slider').flexslider(4);
		$('.fmi-red-5').addClass('fmi-red-5-active');

		if (currentFitnessTab !== 'fmi-red-5-active') {
				$('.fitness-menu-item').removeClass(currentFitnessTab);
				currentFitnessTab=$(this).attr('class').split(' ').pop();
		};
		
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
