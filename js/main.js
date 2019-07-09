/*
	Foxstar Theme Scripts
*/

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    Sticky Header
=========================================================================*/    
             
   $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 100;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("scrollActive");
            } else {
                header.removeClass("scrollActive");
            }
            
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }

        });
    });

             
/*=========================================================================
       App Carousel
=========================================================================*/
    $('#app_carousel').owlCarousel({
        
        loop:true,
        margin: 20,
        autoplay: true,
        responsiveClass:true,
        smartSpeed: 500,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            }
        }
        
    });

			 
	 
/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

             
/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    $('#testimonial_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false
    });

             
/*=========================================================================
        Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	});
	
/*=========================================================================
       MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
             
/*=========================================================================
       WOW Active
=========================================================================*/
             
    new WOW({
		offset: 80,
        mobile: false
	}).init();

})(jQuery);

