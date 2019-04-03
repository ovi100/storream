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

});


