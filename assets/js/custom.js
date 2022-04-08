!(function($) {
	"use strict";

// PreLoader
setTimeout(function(){
	$('.loader-wrap').fadeToggle();
  }, 2000);

// Sticky Navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-nav");
function myFunction() {
  if (window.scrollY >= 200) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

//   VenoBox 
$(document).ready(function() {
$('.venobox').venobox({
	'share': false
});
});
// Nice Select
$(document).ready(function() {
	$('select').niceSelect();
  });
//   AOS Animation
$(document).ready(function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
});
  // jQuery counterUp
 $('[data-toggle="counter-up"]').counterUp({
	delay: 10,
	time: 2000,
  });
//   Owl Carousel

  $("#main-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 0,
	autoplay: true,
	smartSpeed: 1200,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		}
	}
  });

  $("#testimonial-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 10,
	autoplay: true,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		800:{
			items:2
		},
		1000:{
			items:3
		}
	}
  });
  $("#client-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 10,
	autoplay: true,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:2
		},
		600:{
			items:4
		},
		1000:{
			items:6
		}
	}
  });

})(jQuery);