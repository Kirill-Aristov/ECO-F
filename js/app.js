let wrapper = document.querySelector(".wrapper");

let pageSlider = new Swiper(".page", {

	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	direction: "vertical",

	slidesPerView: "auto",
	mousewheel: {
		sensitivity: 1,
	},

	simulateTouch: false,

	watchOverflow: true,
	hashNavigation: true,
	speed: 900,

	pagination: {
		el: '.page__pagination',
		type: "bullets",
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},

	init: false,

	on: {
		init: function () {
			setScrollType();
			navSlider();
		},
		resize: function () {
			setScrollType();
		},
		slideChange: function () {
			navSliderRemove();
			navLinks[pageSlider.realIndex].classList.add("active");
		},
	},

	//обновление свайпера
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
})

function setScrollType() {
	if (wrapper.classList.contains("_free")) {
		wrapper.classList.remove("_free");
		pageSlider.params.freeMode = false;
	}
	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector(".screen__content");

		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add("_free");
				pageSlider.params.freeMode = true;
				break;
			}
		}
	}
}


let navLinks = document.querySelectorAll(".nav__link");

function navSlider() {
	if (navLinks.length > 0) {
		navLinks[pageSlider.realIndex].classList.add("active");
		for (let index = 0; index < navLinks.length; index++) {
			const navLink = navLinks[index];
			navLink.addEventListener("click", function (e) {
				navSliderRemove();
				pageSlider.slideTo(index, 800);
				navLink.classList.add("active");
				e.preventDefault();
			});
		}
	}
}

function navSliderRemove() {
	let navLinkActive = document.querySelector(".nav__link.active");

	if (navLinkActive) {
		navLinkActive.classList.remove("active");
	}
}
pageSlider.init();


function lastSlideActive() {
	setTimeout({
		if () {
			
		}
	}, 100	)
}