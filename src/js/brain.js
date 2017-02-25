		$("#button").click(function() {
			$(".gear").addClass("animated");
			startRotating();
			$("#brain-bg").addClass("glow");
			$("#header-div-right").animate({
				zoom : '150%',
				left : '-250px',
				top : '-18px',
			}, 1500);
			$("#arrow").remove();
			$("#header").animate({
				height : '100vh'
			}, 2000);
			$("#header-div-left").addClass("animated");
			$("#header-div-left").addClass("bounceOutLeft");
		});

		function startRotating() {
			$(".gear").addClass("infinite");
			$("#gear1").addClass("spin-clockwise-fast");
			$("#gear2").addClass("spin-anti-clockwise-slow");
			$("#gear3").addClass("spin-anti-clockwise-slow");
			$("#gear4").addClass("spin-anti-clockwise-fast");
			$("#gear5").addClass("spin-clockwise-fast");
			$("#gear7").addClass("spin-clockwise-slow");
			$("#gear8").addClass("spin-clockwise-slow");
			$("#gear9").addClass("spin-clockwise-slow");
			$("#gear10").addClass("spin-anti-clockwise-slow");
			$(".gear-circle-shadow a").css('visibility', 'visible');
		}
