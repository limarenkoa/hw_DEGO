$(function () {
	$('.j-firstSlider').slick({
		arrows:false,
		adaptiveHeight:true,
  		infinite: true,
  		autoplay: true,
  		autoplaySpeed: 1500,
  		fade: true,
  		cssEase: 'linear'
  	})

	$('.j-secondSlider').slick({
		arrows:true,
		adaptiveHeight:true,
		fade: true,
  		cssEase: 'linear'
	});
});