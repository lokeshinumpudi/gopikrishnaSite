jQuery(document)
	.ready(function() {

		/* ---------------------------------------------------------------------- */
		/*	Custom Functions
		/* ---------------------------------------------------------------------- */

		// Logo
		var $logo = $('#logo');
		var $container = document.getElementById("container");
		var clientwidth = $container.clientWidth;

		//initial logo hide on first visit
		if (location.href.indexOf("#") != -1) {
			$logo.show();
		} else {
			if (clientwidth < 700) {
				window.scrollTo(0, 120);
			}
		}
		// Show logo
		$('.menu .tabs a')
			.click(function() {
				$logo.fadeIn('slow');
				//fix header space waste in mobiles


			});
		// Hide logo
		$('.tab-profile')
			.click(function() {
				$logo.fadeOut('slow');
			});

		/* ---------------------------------------------------------------------- */
		/*	Resume
		/* ---------------------------------------------------------------------- */

		// Rating bars
		$(".skills li .rating")
			.each(function(index, e) {

				// Vars
				var
					$ratNum = 7,
					$rat = $(e)
					.attr("data-rat"),
					$point = "<span></span>";

				// Append points
				while ($ratNum > 0) {
					$(e)
						.append($point);
					$ratNum--;
				}

				$(e)
					.find("span")
					.each(function(index, e) {
						if (index >= $rat) return false;
						// Append Disabled Rats
						$(e)
							.animate({
								opacity: 1
							});
					});

			});

		/* ---------------------------------------------------------------------- */
		/*	About
		/* ---------------------------------------------------------------------- */

		// Profile Photo Slider
		// $(".photo-inner ul")
		// 	.carouFredSel({
		// 		direction: "left",
		// 		circular: true,
		// 		auto: true,
		// 		scroll: {
		// 			items: 1,
		// 			fx: 'crossfade',
		// 			duration: 1500,
		// 			wipe: true
		// 		},
		// 		swipe: {
		// 			onTouch: true
		// 		},
		// 		items: {
		// 			width: 153
		// 		}
		// 	});

		/* ---------------------------------------------------------------------- */
		/*	Menu
		/* ---------------------------------------------------------------------- */

		// Needed variables
		var $content = $("#content");

		// Run easytabs
		$content.easytabs({
			animate: true,
			updateHash: false,
			transitionIn: 'slideDown',
			transitionOut: 'slideUp',
			animationSpeed: 500,
			tabs: ".tmenu",
			tabActiveClass: 'active',
		});


		// Hover menu effect
		$content.find('.tabs li a')
			.hover(
				function() {
					$(this)
						.stop()
						.animate({
							marginTop: "-7px"
						}, 200);
				},
				function() {
					$(this)
						.stop()
						.animate({
							marginTop: "0px"
						}, 300);
				}
			);

		// Menu Navigation
		$(".menu .tabs")
			.carouFredSel({
				responsive: true,
				direction: "left",
				circular: false,
				infinite: false,
				pagination: "#menu-controls",
				auto: false,
				scroll: {
					items: 1,
					duration: 300,
					wipe: true
				},
				prev: {
					button: "#menu-prev",
					key: "right"
				},
				next: {
					button: "#menu-next",
					key: "left"
				},
				swipe: {
					onTouch: true
				},
				items: {
					width: 110,
					visible: {
						min: 4,
						max: 5
					}
				}
			});
		/* ---------------------------------------------------------------------- */
		/*	Cats Filter
		/* ---------------------------------------------------------------------- */

		var $catsfilter = $('.cats-filter');

		// Copy categories to item classes
		$catsfilter.find('a')
			.click(function() {
				var currentOption = $(this)
					.attr('data-filter');
				$(this)
					.parent()
					.parent()
					.find('a')
					.removeClass('current');
				$(this)
					.addClass('current');
			});

		/* ---------------------------------------------------------------------- */
		/*	Portfolio
		/* ---------------------------------------------------------------------- */


		//initial data for our carousals

		var all = {
			"data": [{
				imageCategory: "Kitchen",
				imgSrc: "images/watermarked-full/a1.jpg",
				title: "Kitchen",
				text: "fortunetowers"
			}, {
				imageCategory: "Kitchen",
				imgSrc: "images/watermarked/IMG-20160205-WA0000.jpg",
				title: "Family Living",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/IMG-20160205-WA0001.jpg",
				title: "Bedroom tv unit",
				text: "fortunetowers"
			}, {
				imageCategory: "Kitchen",
				imgSrc: "images/watermarked/IMG-20160205-WA0002.jpg",
				title: "Sliding wardrobe",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/IMG-20160205-WA0003.jpg",
				title: "Glass ceiling",
				text: "fortunetowers"
			}, {
				imageCategory: "Kitchen",
				imgSrc: "images/watermarked/IMG-20160205-WA0004.jpg",
				title: "Crockery / Vanity",
				text: "fortunetowers"
			}, {
				imageCategory: "Kitchen",
				imgSrc: "images/watermarked/IMG-20160205-WA0005.jpg",
				title: "Ceiling",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/IMG-20160205-WA0006.jpg",
				title: "Openable Glass Wardrobe",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/IMG-20160205-WA0007.jpg",
				title: "Fabric bed",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/IMG-20160205-WA0009.jpg",
				title: "Bedroom T.V unit",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/IMG-20160205-WA0010.jpg",
				title: "Doors",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/IMG-20160205-WA0017.jpg",
				title: "Study Unit",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/IMG-20160205-WA0018.jpg",
				title: "Veneer Panelling",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/IMG-20160205-WA0020.jpg",
				title: "Bed backdrop",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/IMG-20160205-WA0021.jpg",
				title: "Modular Kitchen",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/IMG-20160205-WA0022.jpg",
				title: "Sliding Wardrobe / Bed",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/IMG-20160205-WA0025.jpg",
				title: "MOP Dining Table",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/IMG-20160205-WA0026.jpg",
				title: "Modular Kitchen",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/Mr-satish,vz.jpg",
				title: "T.V Unit",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/pooja.jpg",
				title: "Pooja room",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/pooja1.jpg",
				title: "Pooja room",
				text: "fortunetowers"
			}, {
				imageCategory: "living-rooms",
				imgSrc: "images/watermarked/ht.jpg",
				title: "Home theater",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/bedbackdrop-daughters-fortunetowers.jpg",
				title: "Kids Wall Treatment",
				text: "fortunetowers"
			}, {
				imageCategory: "Bedroom",
				imgSrc: "images/watermarked/bedroom-master-fortunetowers.jpg",
				title: "Wall Ceiling ",
				text: "fortunetowers"
			}, {
				imageCategory: "Ceiling",
				imgSrc: "images/watermarked/ceiling-daughter-fortunetowers.jpg",
				title: "Ceiling",
				text: "fortunetowers"
			}, {
				imageCategory: "Ceiling",
				imgSrc: "images/watermarked/ceiling-fortunetowers.jpg",
				title: "Wooden Ceiling",
				text: "fortunetowers"
			}, {
				imageCategory: "Ceiling",
				imgSrc: "images/watermarked/ceiling-parents-fortunetowers.jpg",
				title: "False Ceiling",
				text: "fortunetowers"
			}, {
				imageCategory: "Bed",
				imgSrc: "images/watermarked/daughters-bed-fortunetowers.jpg",
				title: "children's cot",
				text: "fortunetowers"
			}, {
				imageCategory: "Dresser",
				imgSrc: "images/watermarked/dresser-fortunetowers.jpg",
				title: "Dresser Mirror",
				text: "fortunetowers"
			}, {
				imageCategory: "Kitchen",
				imgSrc: "images/watermarked/modularkitchen-fortunetowers.jpg",
				title: "Modular Kitchen",
				text: "fortunetowers"
			}, {
				imageCategory: "Kitchen",
				imgSrc: "images/watermarked/modularkitchen-oven-fortunetowers.jpg",
				title: "Modular Kitchen",
				text: "fortunetowers"
			}, {
				imageCategory: "Pooja",
				imgSrc: "images/watermarked/pooja-fortunetowers.jpg",
				title: "Pooja",
				text: "fortunetowers"
			}, {
				imageCategory: "Bedroom",
				imgSrc: "images/watermarked/slidingdoor-bedroom-fortunetowers.jpg",
				title: "Sliding door",
				text: "fortunetowers"
			}, {
				imageCategory: "Tv",
				imgSrc: "images/watermarked/tv-hall-fortunetowers.jpg",
				title: "Living room TV",
				text: "fortunetowers"
			}, {
				imageCategory: "Tv",
				imgSrc: "images/watermarked/tvunit-fortunetowers.jpg",
				title: "Drawing TV",
				text: "fortunetowers"
			}],
			all: [{
				imageCategory: "Drawingroom",
				imgSrc: "images/watermarked/drawingroom-partitions.jpg",
				title: "Tv",
				text: ""
			}, {
				imageCategory: "Entrance",
				imgSrc: "images/watermarked/entrance-backlit.jpg",
				title: "Entrance",
				text: ""
			}, {
				imageCategory: "ht",
				imgSrc: "images/watermarked/ht.jpg",
				title: "Tv",
				text: ""
			}, {
				imageCategory: "Drawingroom",
				imgSrc: "images/watermarked/drawingroom-partitions.jpg",
				title: "Tv",
				text: ""
			}, {
				imageCategory: "Drawingroom",
				imgSrc: "images/watermarked/drawingroom-partitions.jpg",
				title: "Tv",
				text: ""
			}, {
				imageCategory: "Drawingroom",
				imgSrc: "images/watermarked/drawingroom-partitions.jpg",
				title: "Tv",
				text: ""
			}, {
				imageCategory: "Drawingroom",
				imgSrc: "images/watermarked/drawingroom-partitions.jpg",
				title: "Tv",
				text: ""
			}]

		}; //all
		var fortunetowers = {
			"data": []
		};
		// Needed variables

		var $plist = $('#portfolio-list');
		var $pfilter = $('#portfolio-filter');
		//	render initial content with handlebars
		//
		// var imagesrc = $("#image-template")
		// 	.html();
		// var imageTemplate = Handlebars.compile(imagesrc);
		// var imagehtml = imageTemplate(all);
		// $plist.append(imagehtml);



		// setTimeout(function() {
		// 	// Run Isotope
		// 	$plist.isotope({
		// 		itemSelector: '.grid-item',
		// 		filter: '*',
		// 		percentPosition: true,
		// 		layoutMode: 'masonry',
		// 	});
		// }, 200);


		// // Isotope Filter
		// $pfilter.find('a')
		// 	.click(function() {
		// 		var selector = $(this)
		// 			.attr('data-filter');
		//
		// 		console.log(selector);
		// 		$plist.isotope({
		// 			filter: selector,
		// 			masonry: {
		// 				columnWidth: '.grid-sizer'
		// 			},
		// 			animationOptions: {
		// 				duration: 750,
		// 				easing: 'ease-in-out',
		// 				queue: false,
		// 			}
		// 		});
		// 		return false;
		// 	});




		// //first render default carousal
		//
		var carousalsource = $("#carousalImages-template")
			.html();
		var carousalTemplate = Handlebars.compile(carousalsource);


		var carousalhtml = carousalTemplate(all);
		

		$plist.append(carousalhtml);

		$("a[href='#portfolio']")
			.click(function(e) {
				setTimeout(function() {
					$('.main-gallery')
						.flickity({
							// options
							cellAlign: 'left',
							contain: true,
							freeScroll: true,
							autoPlay: 1800,
							imagesLoaded: true,
							pageDots: false,
						});
				}, 700);
			});

		// var carousalhtml = carousalTemplate(all);
		// // console.log(carousalhtml);
		// $("#portfolio-list")
		// 	.append(carousalhtml);
		// $('.main-gallery')
		// 	.flickity({
		// 		// options
		// 		cellAlign: 'left',
		// 		contain: true,
		// 		freeScroll: true,
		// 		autoPlay: 1800,
		// 		imagesLoaded: true,
		// 		pageDots: false,
		// 	});


		//Render carousals for carousal provided special clients

		var dataTodata = {
			"fortune-towers": fortunetowers,
			"all": all
		}

		$pfilter.find('a')
			.click(function(e) {

				e.preventDefault();
				var selector = $(this)
					.attr('data-filter');
				var data = dataTodata[selector];
				if (data) {
					//remove the old content
					$plist.empty();
					//now depending on the selector render our carousal with specific data
					var carousalhtml = carousalTemplate(data);
					// console.log(carousalhtml);
					$("#portfolio-list")
						.append(carousalhtml);
					//now start flickity carousal
				} //data
				else {

					return;
				}

				$('.main-gallery')
					.flickity({
						// options
						cellAlign: 'left',
						contain: true,
						freeScroll: true,
						autoPlay: 1800,
						imagesLoaded: true,
						pageDots: false,
					});
				return false;
			});






		// $plist.find('img').adipoli({
		// 	'startEffect' 	: 'transparent',
		// 	'hoverEffect' 	: 'boxRandom',
		// 	'imageOpacity' 	: 0.6,
		// 	'animSpeed' 	: 100,
		// });

		/* ---------------------------------------------------------------------- */
		/*	prettyPhoto
		/* ---------------------------------------------------------------------- */

		// $("a[rel^='portfolio']").prettyPhoto({
		// 	animation_speed: 'fast', /* fast/slow/normal */
		// 	social_tools: '',
		// 	theme: 'pp_default',
		// 	horizontal_padding: 5,
		// });




		/* ---------------------------------------------------------------------- */
		/*	Contact Form
		/* ---------------------------------------------------------------------- */

		// Needed variables
		// var $contactform = $('#contactform'),
		// 	$success = 'Your message has been sent. Thank you!';
		//
		// $contactform.submit(function() {
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "php/contact.php",
		// 		data: $(this)
		// 			.serialize(),
		// 		success: function(msg) {
		// 			if (msg == 'SEND') {
		// 				response = '<div class="success">' + $success + '</div>';
		// 			} else {
		// 				response = '<div class="error">' + msg + '</div>';
		// 			}
		// 			// Hide any previous response text
		// 			$(".error,.success")
		// 				.remove();
		// 			// Show response message
		// 			$contactform.prepend(response);
		// 		}
		// 	});
		// 	return false;
		// });
		/* ---------------------------------------------------------------------- */
		/*	Google Maps
		/* ---------------------------------------------------------------------- */

		// Needed variables
		// var $map 				= $('#map'),
		// 	$tabContactClass 	= ('tab-contact'),
		// 	$lat 				= '-37.81759',
		// 	$lon 				= '144.964557';
		//
		// $map.gmap().bind('init', function(ev, map) {
		// 	$map.gmap('addMarker', {'position': $lat +','+ $lon  , 'bounds': true}).click(function() {
		// 		$map.gmap('openInfoWindow', {'content': 'Hello World!'}, this);
		// 	});
		// 	$map.gmap('option', 'zoom', 16);
		// });
		//
		// // Refresh Map
		// $content.bind('easytabs:after', function(evt,tab,panel) {
		// 	$map.gmap('refresh');
		// 	});




	});