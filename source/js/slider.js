import Swiper, {
	Navigation, Pagination, Thumbs, FreeMode,
} from 'swiper';

// Slider
function slider(el, config) {
	if (!el) return false;
	const slider = el.querySelector('.swiper');
	if (!slider) return false;
	const next       = el.querySelector('.swiper-button-next');
	const prev       = el.querySelector('.swiper-button-prev');
	const pagination = el.querySelector('.swiper-pagination');
	const settings   = {
		modules               : [Navigation, Pagination, Thumbs, FreeMode],
		loop                  : false,
		slidesPerView         : 'auto',
		spaceBetween          : 0,
		preloadImages         : false,
		watchSlidesVisibility : true,
		watchOverflow         : true,
		threshold             : 10,
		observer              : true,
		navigation            : {
			nextEl : next,
			prevEl : prev,
		},
		pagination : {
			el             : pagination,
			type           : 'bullets',
			clickable      : true,
			dynamicBullets : false,
		},
	};

	if (config) {
		Object.assign(settings, config);
	}

	return new Swiper(slider, settings);
}

const sliderHero = document.querySelectorAll('[data-slider="hero-slider"]');
sliderHero.forEach((item) => slider(item, {
	loop          : false,
	slidesPerView : 'auto',
	pagination    : {
		el   : '.swiper-pagination',
		type : 'bullets',
	},
	navigation : {
		nextEl : '.hero-next',
		prevEl : '.hero-prev',
	},
}));

const sliderProducts = document.querySelectorAll('[data-slider="products-slider"]');
sliderProducts.forEach((item) => slider(item, {
	loop          : false,
	slidesPerView : 'auto',
	navigation    : {
		nextEl : '.products-next',
		prevEl : '.products-prev',
	},
}));

const sliderMarkets = document.querySelectorAll('[data-slider="markets-slider"]');
sliderMarkets.forEach((item) => slider(item, {
	loop          : false,
	slidesPerView : 'auto',
	navigation    : {
		nextEl : '.markets-next',
		prevEl : '.markets-prev',
	},
}));

const sliderTrust = document.querySelectorAll('[data-slider="trust-slider"]');
sliderTrust.forEach((item) => slider(item, {
	loop          : false,
	slidesPerView : 'auto',
	navigation    : {
		nextEl : '.trust-next',
		prevEl : '.trust-prev',
	},
}));

const sliderNews = document.querySelectorAll('[data-slider="news-slider"]');
sliderNews.forEach((item) => slider(item, {
	loop                : false,
	slidesPerView       : 'auto',
	watchSlidesProgress : true,
	navigation          : {
		nextEl : '.news-next',
		prevEl : '.news-prev',
	},
}));

const sliderReviews = document.querySelectorAll('[data-slider="reviews-slider"]');
sliderReviews.forEach((item) => slider(item, {
	loop          : false,
	slidesPerView : 'auto',
	navigation    : {
		nextEl : '.reviews-next',
		prevEl : '.reviews-prev',
	},
}));

const sliderTeam = document.querySelectorAll('[data-slider="team-slider"]');
sliderTeam.forEach((item) => slider(item, {
	loop          : false,
	slidesPerView : 'auto',
	navigation    : {
		nextEl : '.team-next',
		prevEl : '.team-prev',
	},
}));

const sliderCategories = document.querySelectorAll('[data-slider="categories-slider"]');
sliderCategories.forEach((item) => slider(item, {
	loop                : false,
	slidesPerView       : 'auto',
	watchSlidesProgress : true,
	freeMode            : true,
}));

const sliderInteresting = document.querySelectorAll('[data-slider="interesting-slider"]');
sliderInteresting.forEach((item) => slider(item, {
	loop                : false,
	slidesPerView       : 'auto',
	watchSlidesProgress : true,
	navigation          : {
		nextEl : '.interesting-next',
		prevEl : '.interesting-prev',
	},
}));
