$(document).ready(function() {


	// Slider Event

	$('.reviews-sliderFor').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		speed: 500,
		asNavFor: '.reviews-sliderNav'
	});
	$('.reviews-sliderNav').slick({
		prevArrow: $('.reviews .slick-prev'),
		nextArrow: $('.reviews .slick-next'),
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		speed: 500,
		asNavFor: '.reviews-sliderFor'
	});
	$('.personal-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500
	});
	$('.about-sliderFor').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.about-sliderNav'
	});
	$('.about-sliderNav').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		speed: 500,
		asNavFor: '.about-sliderFor'
	});

	//

	// Click Event

	$(document).on('click', '.js-toggle', function() {
		$(this).toggleClass('open')
		if ($(this).hasClass('open')) {
			$('.head-menu').slideDown(300);
		} else {
			$('.head-menu').slideUp(300);
		}
	});
	$(document).on('click', '.js-call', function() {
		var form = $(this).data('form');
		$('.js-form').val(form);
		$('.popup').addClass('open');
	});
	$(document).on('click', '.js-submit', function(event) {
		var phone = $(this).parent().find('input[name="phone"]');
		if (phone != null && phone.val().length < 5) {
			alert('поле "Телефон" должно содержать минимум 5 символов');
			event.preventDefault();
		}
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.popup-call').length) return;
		$('.popup').removeClass('open');
	});

	//

	// Accordion Event

	$(function() {
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.questions-box-head');
			links.on('click', {
				el: this.el,
				multiple: this.multiple
			}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.questions-box-body').not($next).slideUp().parent().removeClass('open');
			};
		}
		var accordion = new Accordion($('.questions-accordion'), false);
	});

	//

	// Tab Event

	var clickedTab = $('.services-tabItem.active');
	var tabWrapper = $('.services-tabWrap');
	var activeTab = tabWrapper.find('.open');
	var activeTabHeight = activeTab.outerHeight();
	
	activeTab.show();
	tabWrapper.height(activeTabHeight);

	function tabInit() {
		clickedTab = $('.services-tabItem.active');
		activeTab.fadeOut(300, function() {
			$('.services-tabInfo').removeClass('open');
			var clickedTabIndex = clickedTab.index('.services-tabItem');
			$('.services-tabInfo').eq(clickedTabIndex).addClass('open');
			activeTab = $('.services-tabWrap .open');
			activeTabHeight = activeTab.outerHeight();
			//scroll = $('.services-tabWrap').offset().top;
			//$('html, body').animate({
				//scrollTop: scroll - 70
			//}, 700);
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 250, function() {
				activeTab.delay(50).fadeIn(250);
			});
		});
	}
	tabInit();
	$('.services-tabList').on('click', '.services-tabItem', function() {
		$('.services-tabItem').removeClass('active');
		$(this).addClass('active');
		tabInit();
	});

	//

	// IE 'object-fit: cover' fix

	function ObjectFitIt() {
		$('.js-obj').each(function() {
			var imgSrc = $(this).attr('src');
			var fitType = 'cover';
			if ($(this).data('fit-type')) {
				fitType = $(this).data('fit-type');
			}
			$(this).parent().css({ 
				'background' : 'transparent url("' + imgSrc + '") no-repeat center center/' + fitType
			});
			$('.js-obj').css('display','none'); 
		});
	}
	if ('objectFit' in document.documentElement.style === false) {
		ObjectFitIt();
	}

	//

	// Scroll Event

	$(document).on('click', '.js-anchor', function() {
		var id = $(this).attr('href');
				scroll = $(id).offset().top;
		if ($('.head-toggle').hasClass('open')) {
			$('.head-toggle').removeClass('open');
			$('.head-menu').slideUp(300);
		}
		$('html, body').animate({
			scrollTop: scroll - 59
		}, 1500);
		return false;
	});
	$(document).on('click', '.js-totop', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

	//

	// Resize Event

	$(window).on('load', function() {
		if ($(this).width() <= 1059) {
			$('.advice-box-btn').each(function() {
				$(this).parent().parent().find('.advice-box-info').append($(this));
			});
		} else {
			$('.advice-box-btn').each(function() {
				$(this).parent().parent().find('.advice-box-order').append($(this));
			});
		}
	});
	$(window).on('resize', function() {
		if ($(this).width() <= 1059) {
			$('.advice-box-btn').each(function() {
				$(this).parent().parent().find('.advice-box-info').append($(this));
			});
		} else {
			$('.advice-box-btn').each(function() {
				$(this).parent().parent().find('.advice-box-order').append($(this));
			});
		}
	});

	//

	// Load Event

	$(window).on('load', function() {
		$('.pulse').fadeOut();
		$('.preloader').delay(400).fadeOut('slow');
	});

	//
	
});