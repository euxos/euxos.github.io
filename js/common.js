$(document).ready(function() {

	$.stellar({
		responsive: true,
		horizontalOffset: 0,
		verticalOffset: -150
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive: {
			0:{
            items:1,
            nav: true
        }
		},
		navText: ""
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_c").magnificPopup();

	function wResize() {
	$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	$(".s_map .tabs .tab").click(function() {
		$(".s_map .tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_map .tab_content .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".footer_phone .wrapper .tab").click(function() {
		$(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this)
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();
				$ths.trigger("reset");
			}, 1000);
		});
		return fasle;
	});
	
});

$(window).load(function() {

	$(".top_header h1").animated("fadeInDown", "fadeInDown");
	$(".top_header h2").animated("fadeInUp", "fadeInUp");
	$(".profi_item").animated("fadeInRight", "fadeInRight");
	$(".s_profi form").animated("zoomInRight", "zoomInRight");
	$(".s_back h3").animated("fadeInUp", "fadeInUp");
	$("footer").animated("fadeInUp", "fadeInUp");
});