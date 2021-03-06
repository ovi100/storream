 /*------------------------------------
 *Author:MD ABU SAYED
 *Template:Vision Optics
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	if ($(window).width()<766){
     	$("body").click(function(e){
  			$(".vision-top-link").fadeOut("fast");
		});
    } 

	

	$(window).scroll(function(){
	    if ($(this).scrollTop()>150){
	      $('.vision-action-bar').addClass('fixed-nav');
	      
	    } 
	    else {
	      $('.vision-action-bar').removeClass('fixed-nav');
	    }
  	});

  	$(".mobile-nav-icon").click(function(e){
		e.stopPropagation();
	  	$(".sidebar-wrapper").animate({
	    	left: 0
	  	}, "fast");
	});

  	$(".closetbn").click(function(){
	  	$(".sidebar-wrapper").animate({
	    	left: "-500px"
	  	}, "fast");
	});

  	$(".mbls-icon").click(function(e){
		e.stopPropagation();
	  	$(".mbl-search-box").fadeToggle("fast");
	});

	$(".mbls-close").click(function(e){
		e.stopPropagation();
	  	$(".mbl-search-box").fadeOut("fast");
	});

	$('.clients-slider').owlCarousel({
		autoWidth: true,
		dots: false,
		items: 6,
		loop: true,
	    margin:70,
	    nav: true,
	    navText: [ ,'<i class="fas fa-angle-right"></i>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})

	$('.testimonial-slider').owlCarousel({
		center:true,
		dots: false,
		items: 3,
		loop: true,
	    margin:0,
	    nav: true,
	    navText: [ ,'<i class="fas fa-angle-right"></i>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	$('.stories-slider').owlCarousel({
		dots: true,
		items: 3,
		loop: true,
	    margin:20,
	    nav: false,
	    video:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	$('.themes-slider').owlCarousel({
		dots: false,
		items: 3,
		loop: true,
	    margin:15,
	    nav: true,
	    navText: [ ,'<i class="fas fa-angle-right"></i>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	/*--------------------magnificPopup------------------*/
	var videoPlay = $('.video-play');
    videoPlay.magnificPopup({
      type: 'iframe',
      closeBtnInside: false,
      closeOnContentClick: true,
      tLoading: '', // remove text from preloader


      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }

            src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
          }



          // you may add here more sources

        },

        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
    });

});


