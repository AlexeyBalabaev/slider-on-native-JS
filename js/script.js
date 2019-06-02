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

	fn.init = function() {
		this.options = extend({}, this.defaults, this.setup);

		this.setSizeCarousel();
		this.setCoordinates();
		this.initControl();
		if(!this.events) {
			this.registerEvents();
		}
	};

	fn.setSizeCarousel = function() {
		this.widthSlider = this.slider.offsetWidth;
		this.max = this.count - this.options.visibleItems;

		var width = (this.widthSlider - this.options.margin * (this.options.visibleItems - 1)) / this.options.visibleItems;

		this.width = width + this.options.margin;
		this.widths = this.width * this.count;
		this.stage.style.width = this.widths + 'px';

		[].forEach.call(this.items, function(el) {
			el.style.cssText = 'width' + width + 'px; margin-right:' + this.options.margin + 'px;';
		}.bind(this));

		this.gallery.style.visibility = 'visible';
	};

	fn.setCoordinates = function() {
		var point = 0;
	};

	function extend(out) {
		out = out || {};
		for (var i = 1; i < arguments.length; i++) {
			if (!arguments[i]) continue;

			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) 
					out[key] = arguments[i][key];
			}
		}
		return out;
	};

}) ();