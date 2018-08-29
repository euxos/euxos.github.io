$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".main-head .arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height() + 120 }, "slow");
		return false;
	});


	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();

	$(".section-4 h2").waypoint(function(){
		$(".section-4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});
		
	}, {
		offset : "25%"
	});

	$(".section-6 h2").waypoint(function(){
		$(".section-6 .team").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});
		
	}, {
		offset : "25%"
	});



	$(".section-5").waypoint(function(dir) {

		if (dir === "down") {

			$(".section-5 .tc-item").each(function(index) {
				var ths = $(this);
				setTimeout(function() {
					var myAnim = new DrawFillSVG({
						elementId: "tc-svg-" + index 
					});
				}, 700*index);
			});
		}; this.destroy();
	}, {
		offset : "25%"
	});


	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		fluidSpeed : 700,
		autoplaySpeed : 700,
		navSpeed : 700,
		dotsSpeed : 700,
		dragEndSpeed : 700
	});


	$(".homesect .section-head p, .homesect .section-head h2").animated("fadeInRight");

	$(".info-item-wrap").animated("zoomIn");


	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	$('.homesect .section-button .buttons').click(function(){
		$("#callback h4").html($(this).text());
	}).magnificPopup({
  type:'inline',
  mainClass: 'mfp-forms'
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
