; (function (){
	'use strict';

	var Gallery = function(id, setup) {
		this.defaults = {
			margin: 10,
			visibleItems: 1,
			border: 0,
			responsive: false,
			autoScroll: false,
			interval: 3000,
			nav: true,
			dots: true,
			keyControl: false,
			baseTransition: 0.4,
			delayTimer: 250,
			limit: 30
		};

		this.id = id;
		this.setup = setup;

		this.gallery = document.getElementById(this.id);
		this.slider = this.gallery.querySelector('.slider');
		this.stage = this.gallery.querySelector('.stage');
		this.items = this.gallery.querySelectorAll('.staage > div');
		this.count = this.items.length;

		this.current = 0;
		this.next = 0;
		this.pressed = false;
		this.start = 0;
		this.shift = 0;

		this.init();
	};

	window.Gallery = Gallery;

	var fn = Gallery.prototype;

}) ();