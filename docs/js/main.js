AOS.init({duration:800,easing:"slide"}),function(a){"use strict";a(window).stellar({responsive:!0,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:"scroll"});!function(){a(".js-fullheight").css("height",a(window).height()),a(window).resize(function(){a(".js-fullheight").css("height",a(window).height())})}();!function(){setTimeout(function(){a("#ftco-loader").length>0&&a("#ftco-loader").removeClass("show")},1)}(),a.Scrollax();!function(){a("body").on("click",".js-fh5co-nav-toggle",function(e){e.preventDefault(),a("#ftco-nav").is(":visible")?a(this).removeClass("active"):a(this).addClass("active")})}();!function(){a(document).on("click",'#ftco-nav a[href^="#"]',function(e){e.preventDefault();a.attr(this,"href");a("html, body").animate({scrollTop:a(a.attr(this,"href")).offset().top-70},500,function(){})})}();!function(){a(".home-slider").owlCarousel({loop:!0,autoplay:!0,margin:0,animateOut:"fadeOut",animateIn:"fadeIn",nav:!1,autoplayHoverPause:!1,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})}(),a("nav .dropdown").hover(function(){var e=a(this);e.addClass("show"),e.find("> a").attr("aria-expanded",!0),e.find(".dropdown-menu").addClass("show")},function(){var e=a(this);e.removeClass("show"),e.find("> a").attr("aria-expanded",!1),e.find(".dropdown-menu").removeClass("show")}),a("#dropdown04").on("show.bs.dropdown",function(){console.log("show")});!function(){a(window).scroll(function(){var e=a(this),n=e.scrollTop(),t=a(".ftco_navbar"),o=a(".js-scroll-wrap");n>150&&(t.hasClass("scrolled")||t.addClass("scrolled")),n<150&&t.hasClass("scrolled")&&t.removeClass("scrolled sleep"),n>350&&(t.hasClass("awake")||t.addClass("awake"),o.length>0&&o.addClass("sleep")),n<350&&(t.hasClass("awake")&&(t.removeClass("awake"),t.addClass("sleep")),o.length>0&&o.removeClass("sleep"))})}();!function(){a("#section-counter, .hero-wrap, .ftco-counter").waypoint(function(e){if("down"===e&&!a(this.element).hasClass("ftco-animated")){var n=a.animateNumber.numberStepFactories.separator(",");a(".number").each(function(){var e=a(this),t=e.data("number");console.log(t),e.animateNumber({number:t,numberStep:n},7e3)})}},{offset:"95%"})}();!function(){var e=0;a(".ftco-animate").waypoint(function(n){"down"!==n||a(this.element).hasClass("ftco-animated")||(e++,a(this.element).addClass("item-animate"),setTimeout(function(){a("body .ftco-animate.item-animate").each(function(e){var n=a(this);setTimeout(function(){var a=n.data("animate-effect");"fadeIn"===a?n.addClass("fadeIn ftco-animated"):"fadeInLeft"===a?n.addClass("fadeInLeft ftco-animated"):"fadeInRight"===a?n.addClass("fadeInRight ftco-animated"):n.addClass("fadeInUp ftco-animated"),n.removeClass("item-animate")},50*e,"easeInOutExpo")})},100))},{offset:"95%"})}(),a(".image-popup").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})}(jQuery);