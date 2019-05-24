var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJX
	LazyFunction: function () {
		// Для лэзи загрузки 

		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top  - lazyImage.closest(".block-with-lazy").clientHeight)<= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.closest(".block-with-lazy").clientHeight) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});


		// лэзи 
		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top -  lazyImage.closest(".block-with-lazy").clientHeight ) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom +  lazyImage.closest(".block-with-lazy").clientHeight) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});

	},



	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }
				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},

	mobileMenu: function () {
		const menu = document.querySelector('.menu-mobile--js')
					toggle = document.querySelector('.toggle-menu-mobile--js')
					body = document.querySelector('body')
					beforeHTML ='<div class="menu-mobile__before menu-mobile__before--js">' 
		menu.insertAdjacentHTML('beforeend', beforeHTML)
		before = document.querySelector('.menu-mobile__before--js')
		function toggleMobileMnu(){
			toggle.classList.toggle("on")
			body.classList.toggle("fixed")
			menu.classList.toggle("active");
		} 
		toggle.addEventListener('click', function(){
		 toggleMobileMnu()
		})
		
		before.addEventListener('click', function(){
			if (menu.classList.contains('active')) { 
				toggleMobileMnu()
			}
		})  
		$('.menu-mobile__link').on('click', function () {
			toggleMobileMnu()
		});
 
	}, 
	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
 

	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}

};

JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	// вызов magnificPopupCall
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask(); 

	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width(); 
		var topH = $("header ").innerHeight();
 
	} 
	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses(); 
	// листалка по стр
	$(" .menu-mobile__link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });
 
	// form
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			$.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			})
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
			}, 4000);
		});
		return false;
	});
	// /form



	// / mask for input





	function sliderSection(sec, sl, pag) {

		// slider
		$(sec).each(function () {
			var swiper4 = new Swiper($(this).find(sl), { 
				slidesPerView: 'auto',
				watchOverflow: true,
				spaceBetween: 0, 
				touchStartForcePreventDefault: true,
				// autoHeight: true, 
				// autoplay: {
				// 	delay: 3000,
				// },
				pagination: {
					el: $(this).find(pag),
					clickable: true,
				},
				navigation: {
					nextEl: $(this).find('.swiper-button-next'),
					prevEl: $(this).find('.swiper-button-prev'),
				},
				loop: true,
				loopFillGroupWithBlank: true, 
			});
		})
	}

	
	sliderSection('.section', '.slider--js', '.swiper-pagination')
	
	function sliderTeam(sec, sl, pag) {

		// slider
		$(sec).each(function () {
			var swiper4 = new Swiper($(this).find(sl), { 
				slidesPerView: 1,
				watchOverflow: true,
				spaceBetween: 0, 
				touchStartForcePreventDefault: true,
				// autoHeight: true, 
				// autoplay: {
				// 	delay: 3000,
				// },
				pagination: {
					el: $(this).find(pag),
					clickable: true,
				},
				navigation: {
					nextEl: $(this).find('.swiper-button-next'),
					prevEl: $(this).find('.swiper-button-prev'),
				},
				loop: true,  
				breakpointsInverse: true, 
				// Responsive breakpoints
				breakpoints: {
				 
					576: {
						slidesPerView: 2, 
					},
					// when window width is <= 640px
					991: {
						slidesPerView: 4, 
					}
				}
			});
		})
	}

	
	sliderTeam('.s-team', '.s-team__slider', '.swiper-pagination')

	$('.scrollblock--js').paroller();  


	   var wow = new WOW({ mobile: false });
	        wow.init(); 
});