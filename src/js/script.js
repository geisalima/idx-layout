$(document).ready(function () {
	// CARROSSEL CARDS
	const swiper = new Swiper('.swiper', {
		spaceBetween: 32,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
		},
		
		breakpoints: {

		    320: {
				slidesPerView: 1,
		    },
			
		    500: {
		    	slidesPerView: 2,
		    },

			992: {
		    	slidesPerView: 3,
		    	pagination: false
			},

		},
		
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

	// MENU SANDUICHE
	$('.menu').click(function () {
		$(this).parent().toggleClass('open');
		$('body').toggleClass('overflow-hidden')
	});

	// FECHAR MENU CLICAR NA ANCORA
	$('body').on('click', '.navbar-menu.open a', function () {
		$(this).closest('.navbar-menu').toggleClass('open');
		$('body').toggleClass('overflow-hidden')
	});
});