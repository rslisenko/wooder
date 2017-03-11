;(function($) {
	"use strict";

	$(function(){
		$('.ba-slider').slick(
		{
			infinite: true,
			slidesToShow: 2,
			dots:true,
			slidesToScroll: 1,
			slide: '.ba-slider__item',
			prevArrow: '.ba-slider__prev',
			nextArrow: '.ba-slider__next',
			responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1,
					dots:false
				}
			}

			]
		});
		$('.ba-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.ba-slide-number').text("0" + (nextSlide + 1));
		});
	});
})(jQuery);
