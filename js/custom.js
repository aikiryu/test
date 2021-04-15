$(document).ready(function () {
	"use strict";
	/* ==================================
	 Table of contents:-
		1. Preloader
		2. progress-bar and tooltip
		3. one page scrolling  
		4. Scroll To Top 
		5. wow.js active 
		6. counter up active 
		7. magnificPopup active
		8. rev-slider -
			8-1. home_portfolio			
			8-2. home_default			
		9. Isotope and Masonry -
			9-1. home_portfolio masonry
			9-2. home_portfolio_resume masonry
			9-3. portfolio_grid_2 masonry	
			9-4. portfolio_grid_3 masonry	
			9-5. portfolio_grid_4 masonry	
			9-6. portfolio_grid_full masonry	
			9-7. portfolio_masonry_2 masonry	
			9-8. service_2 masonry						
		10. OwlCarousel -
			10-1. home_portfolio_resume testimonial
			10-2. about_us testimonial
			10-3. service 2 testimonial
		11. Gmap -
		12. home_portfolio_resume circle progress
		13. about_us team MasterSlider
		14. Ripples Effect active
	================================== */
	/*----------------------------
		1. Preloader
	-------------------------------*/
	$(window).on('load', function () {
		$("#spinningSquaresG1").delay(1000).fadeOut(500);
		$(".inTurnBlurringTextG").on('click', function () {
			$("#spinningSquaresG1").fadeOut(500);
		});
	});

	/*-------------------------------
		2. progress-bar and tooltip 
	--------------------------------- */
	var dataToggleTooTip = $('[data-toggle="tooltip"]');
	var progressBar = $(".progress-bar");
	if (progressBar.length) {
		progressBar.appear(function () {
			dataToggleTooTip.tooltip({
				trigger: 'manual'
			}).tooltip('show');
			progressBar.each(function () {
				var each_bar_width = $(this).attr('aria-valuenow');
				$(this).width(each_bar_width + '%');
			});
		});
	}
	/*---------------------
		3. one page scrolling 
	-------------------------*/
	$('a.page-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000, 'easeInSine');
		event.preventDefault();
	});
	
	/*----------------------
		4. Scroll To Top    
	-----------------------*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('#ScrollUp').fadeIn();
		} else {
			$('#ScrollUp').fadeOut();
		}
	});
	$('#ScrollUp, #scroll_top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

	
	/*---------------------
		5. wow.js active   
	----------------------- */
	new WOW().init();
	/* --------------------
		6. counter up active   
	---------------------- */
	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});
	/*---------------------
		7. magnificPopup active 
	--------------------- */
	// $("a[rel^='prettyPhoto']").prettyPhoto();
	$('.prothoma-item, .portfolio_item').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	

	/* ------------------------------------
		8-1. home_portfolio 
	--------------------------------------- */
	var vinci = jQuery;
	var revapi484;
	if (vinci("#pfh_rev_slider").revolution == undefined) {
		revslider_showDoubleJqueryError("#pfh_rev_slider");
	} else {
		revapi484 = vinci("#pfh_rev_slider").show().revolution({
			sliderType: "standard",
			jsFileLocation: "js",
			sliderLayout: "fullscreen",
			dottedOverlay: "none",
			delay: 7000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				mouseScrollReverse: "default",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},
				bullets: {
					enable: false,
					style: 'hesperiden',
					tmp: '',
					direction: 'horizontal',
					rtl: false,
					container: 'slider',
					h_align: 'center',
					v_align: 'bottom',
					h_offset: 0,
					v_offset: 50,
					space: 10,
					hide_onleave: false,
					hide_onmobile: false,
					hide_under: 0,
					hide_over: 9999,
					hide_delay: 200,
					hide_delay_mobile: 1200
				},
				arrows: {
					style: "uranus",
					enable: false,
					hide_onmobile: true,
					hide_under: 768,
					hide_onleave: false,
					tmp: '',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					}
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: [1366, 1024, 778, 480],
			gridheight: [800, 768, 960, 720],
			lazyType: "single",
			parallax: {
				origo: "slidercenter",
				speed: 300,
				levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 49, 50, 51, 55],
				type: "mouse",
			},
			shadow: 0,
			spinner: "spinner2",
			stopLoop: "on",
			stopAfterLoops: 0,
			stopAtSlide: 0,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}

	
	/* ------------------------------------
		8-2. home_default
	--------------------------------------- */
	var vinci = jQuery;
	var revapi484;
	if (vinci("#default_home_slider").revolution == undefined) {
		revslider_showDoubleJqueryError("#default_home_slider");
	} else {
		revapi484 = vinci("#default_home_slider").show().revolution({
			sliderType: "standard",
			jsFileLocation: "js",
			sliderLayout: "fullscreen",
			dottedOverlay: "none",
			delay: 7000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				mouseScrollReverse: "default",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},
				bullets: {
					enable: false,
					style: 'hesperiden',
					tmp: '',
					direction: 'horizontal',
					rtl: false,
					container: 'slider',
					h_align: 'center',
					v_align: 'bottom',
					h_offset: 0,
					v_offset: 50,
					space: 10,
					hide_onleave: false,
					hide_onmobile: false,
					hide_under: 0,
					hide_over: 9999,
					hide_delay: 200,
					hide_delay_mobile: 1200
				},
				arrows: {
					style: "gyges",
					enable: true,
					hide_onmobile: true,
					hide_under: 768,
					hide_onleave: false,
					tmp: '',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					}
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: [1600, 1024, 778, 480],
			gridheight: [900, 768, 960, 720],
			lazyType: "single",
			parallax: {
				origo: "slidercenter",
				speed: 300,
				levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 49, 50, 51, 55],
				type: "mouse",
			},
			shadow: 0,
			spinner: "spinner3",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}

	/* -------------------------------
		9-1. home_portfolio masonry
	-------------------------------- */
	$('.prothoma-menu .title').on('click', function(){
		$(this).toggleClass('active').next('.toggle').slideToggle();
		return false;
	});

	$(window).on('load', function(){
		if($('.prothoma-container').length){
			var $container = $('.prothoma-container').isotope({
			    itemSelector: '.prothoma-item',
			    masonry: {
			        columnWidth: '.prothoma-sizer'
			    }
			});

			$('.prothoma-menu a').on('click', function() {
		        if($(this).hasClass('active')) return false;
		        $(this).parent().find('.active').removeClass('active');
		        $(this).addClass('active');
		        $(this).closest('.prothoma-menu').find('.title').text($(this).find('.text').text());
		        if($(this).closest('.prothoma-menu').find('.title').is(':visible')) $(this).closest('.prothoma-menu').find('.toggle').slideUp();
		        var filterValue = $(this).attr('data-filter');
		        $container.isotope({ filter: filterValue });
		    });
		}
	});

	/* -------------------------------
		9-2. home_portfolio_resume masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".portfolio_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_33'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".portfolio_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	
	/* -------------------------------
		9-3. portfolio_grid_2 masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".pf_g2_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_50'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".pf_g2_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	/* -------------------------------
		9-4. portfolio_grid_3 masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".pf_g3_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_33'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".pf_g3_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	/* -------------------------------
		9-5. portfolio_grid_4 masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".pf_g4_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_25'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".pf_g4_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	/* -------------------------------
		9-6. portfolio_grid_full masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".pf_gf_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_25'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".pf_gf_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	/* -------------------------------
		9-7. portfolio_masonry_2 masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".pf_m2_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_50'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".pf_m2_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	/* -------------------------------
		9-8. service_2 masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".ser_2_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_25'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".ser_2_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	/* -------------------------------
		9-8. service_2 masonry
	-------------------------------- */
	$(window).on('load', function () {
		// Activate isotope in container         
		$(".default_g_container").isotope({
			itemSelector: '.portfolio_item',
			masonry: {
				columnWidth: '.item_sizer_33'
			}
		});
		// Add isotope click function
		$('.portfolio_menu li').on('click', function () {
			$(".portfolio_menu li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".default_g_container").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easing',
					queue: false,
				}
			});
			return false;
		});
	});

	

	
	/* --------------------------------
		10-1. home_portfolio_resume testimonial 
	---------------------------------- */
	$("#pfr_testimonial").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		mouseDrag: false,
		dots: false,
		dotsEach: false,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		animateIn: 'fadeInOut',
		animateOut: 'fadeOut',
		smartSpeed: 3000
	});

	
	/* --------------------------------
		10-2. about_us testimonial
	---------------------------------- */
	$("#ab_us_testimonial_owl").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		mouseDrag: true,
		dots:true,
		dotsEach:true,
		nav: false,
		transitionStyle:"fade",
		// animateIn: 'fadeInRight',
		// animateOut: 'fadeOutRight',
		smartSpeed: 1500
	});

	/* --------------------------------
		10-3. service 2 testimonial
	---------------------------------- */
	$("#ser_2_testimonial_owl").owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		mouseDrag: false,
		dots:true,
		dotsEach:true,
		nav: false,
		transitionStyle:"fade",
		animateIn: 'fadeInUp',
		animateOut: 'fadeOutUp',
		smartSpeed: 1000
	});

	/* --------------------------------
		10-1. home_portfolio_resume testimonial 
	---------------------------------- */
	$("#default_testimonial").owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		mouseDrag: true,
		dots: true,
		dotsEach: true,
		nav: false,
		transitionStyle:"fade",
		animateIn: 'fadeInOut',
		animateOut: 'fadeOut',
		smartSpeed: 3000
	});



	/*----------------------------------
		11.Map
	----------------------------------*/


   

	

	/*-------------------------------
		12. home_portfolio_resume circle progress 
	----------------------------------*/
    $('.pfr_circle_progress').circliful();

    jQuery('body').aoInit();

    /*--------------------------------
 		13. about_us team MasterSlider
	---------------------------------*/
    var slider = new MasterSlider();
	slider.setup('masterslider' , {
		loop:true,
		width:436,
		height:436,
		speed:10,
		view:'focus',
		preload:0,
		space:0,
		space:100,
		viewOptions:{centerSpace:1}
	});
	// slider.control('arrows');
	slider.control('arrows' , {autohide:false});
	slider.control('slideinfo',{insertTo:'#staff-info'});

    /*--------------------------------
 		13-2. default_home team MasterSlider
	---------------------------------*/
   	 var slider_2 = new MasterSlider();
	slider_2.setup('default_masterslider' , {
		loop:true,
		width:370,
		height:385,
		speed:10,
		view:'focus',
		preload:0,
		space:0,
		space:0,
		viewOptions:{centerSpace:1.35}
	});
	// slider.control('arrows');
	slider_2.control('arrows' , {autohide:false});
	slider_2.control('slideinfo',{insertTo:'#staff-info'});


	/*----------------------------
		14. Ripples Effect active
	------------------------------ */
	if (typeof $.fn.ripples == 'function') {
        try {
            $('.ripple').ripples({
                resolution: 500,
                perturbance: 0.04
            });
        } catch (e) {
            $('.error').show().text(e);
        }
    }

    



});
/* ------------------------------------------  the end ---------------------------------------------*/