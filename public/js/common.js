const menu = document.querySelector('.menu-mobile--js')
toggle = document.querySelector('.toggle-menu-mobile--js')
body = document.querySelector('body')

var prld = $('.prld');

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJX
	LazyFunction: function () {
		// Для лэзи загрузки 

		document.addEventListener("DOMContentLoaded", function () {
			var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			var active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (( lazyImage.closest(".block-with-lazy").getBoundingClientRect().top   <= window.innerHeight &&  lazyImage.closest(".block-with-lazy").getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none")  {
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
			var lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
			var active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (getComputedStyle(lazyImage).display !== "none") {
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
		const beforeHTML = '<div class="menu-mobile__before menu-mobile__before--js">'
		menu.insertAdjacentHTML('beforeend', beforeHTML)
		before = document.querySelector('.menu-mobile__before--js')

		function toggleMobileMnu() {
			toggle.classList.toggle("on")
			body.classList.toggle("fixed")
			menu.classList.toggle("active");
		}
		toggle.addEventListener('click', function () {
			toggleMobileMnu()
		})

		before.addEventListener('click', function () {
			if (menu.classList.contains('active')) {
				toggleMobileMnu()
			}
		})
		$('.menu-mobile__link').on('click', function () {
			toggleMobileMnu()
		});

	},

};

JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	// вызов magnificPopupCall
	JSCCommon.magnificPopupCall();
	JSCCommon.mobileMenu();

	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();
		var topH = $("header ").innerHeight();

	}
	$(window).resize(function () {
		heightses();
		paddingInput();
	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();
	// листалка по стр
	$(" .menu-mobile__link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});
 
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
 
		$('.s-cases').each(function () {
			var swiper4 = new Swiper($(this).find('.s-cases__slider--js'), {
				slidesPerView: 'auto',
				watchOverflow: true,
				spaceBetween: 0, 
				allowTouchMove: false, 
				pagination: {
					el: $(this).find('.swiper-pagination'),
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


	$(window).on('load', function () {
		// preloader
		prld.delay(1050).fadeOut(function(){
			body.classList.remove('prld-on');
			var wow = new WOW({
				mobile: false
			});
			wow.init();
		}).find('i').fadeOut();
		// masonry 
	
		// $grid.one( 'layoutComplete', fullPage())
	});


	
	$('.popup-with-move-anim').click(function () {
		var th = $(this);
 
		$(th.attr('href')).find(".order").val(th.data('order'));
	})
 
	var formKill = true;
	var self = this;

	var phone = $('.input-phone'),
		input = $('input[type="text"], textarea');

	phone.find('input[name="phone"]').bind("change keyup input click", function () {
		if (this.value.match(/[^0-9 ]/g)) {
			this.value = this.value.replace(/[^0-9 ]/g, '');
		}
	});

	phone.find('.code-btn').click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent().find('.code-menu').removeClass('show');
		} else {
			$(this).addClass('active');
			$(this).parent().find('.code-menu').addClass('show');
		}
	});

	var codeSpan = 	$(".input-phone").find('.code-span');
	function paddingInput() {

		$(".input-phone input").css('padding-left', 74 + codeSpan.width());
	}
	phone.find('.code-menu li').click(function () {
		if (!$(this).hasClass('border')) {
			var code = $(this).find('span').text();
			$(this).parent().parent().find('.code-btn').removeClass('active');
			$(this).parent().removeClass('show');
			codeSpan.html(code);
			$(this).parent().parent().parent().find('[name="phone-code"]').val(code);
			paddingInput();
		}
	});

	phone.find('input').focus(function () {
		$(this).parent().removeClass('has-error');
	});

	input.focus(function () {
		$(this).parent().removeClass('has-error');
		$(this).parent().addClass('focused');
	});

	input.focusout(function () {
		if ($(this).val() === '') {
			$(this).parent().removeClass('focused');
		}
	});

	input.each(function (i, elm) {
		if (elm.value.length) {
			$(elm).parent().addClass('focused');
		}
	});

	$('form').submit(function (e) {
		e.preventDefault();

		$(this).find(' input[name="phone"]').each(function () {
			if ($(this).val().length < 1) $(this).parent().addClass('has-error');
		});
 

		if ($(this).find('.has-error').length < 1 && formKill) {
			formKill = false;
			var th = $(this);
			$.ajax({
				type: "POST",
				url: 'action.php', //Change
				data: th.serialize()
			}).success(function () {
				// $.magnificPopup.close();
				// $.magnificPopup.open({
				// 	items: {
				// 		src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
				// 		type: 'inline'
				// 	}
				// })
				window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
					// $.magnificPopup.close();
				}, 4000);
			});
			return false;
		}
	});


});