// $(document).ready(function() {
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		// adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					dots: true,
// 					arrows: false
// 				}
// 			}
// 		]
// 	});
// });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
	autoplay: false,
	controlsText: [
		'<img src="icons/arrow_left.png">',
		'<img src="icons/arrow_right.png">'
	]
  });
