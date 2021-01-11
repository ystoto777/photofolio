var window_height = $(window).height();
var window_width= $(window).width();

function scroll_to(top,left) {
	$('html,body').animate({
		scrollTop: top,
		scrollLeft:left
	}, 0.1);	
}

$(document).ready(function(){
	
	var is_touch_device = ('ontouchstart' in document.documentElement)?true:false;
	
	$("body").addClass("zoom-out");
		
	var image_width = $("img").attr("width");
	var image_height = $("img").attr("height");
		
	$("#center").css({
			"top":image_height/2,
			"left":image_width/2
	});
	
	var init_top = $("#center").offset().top-400;
	var init_left = $("#center").offset().left-700;
	
	scroll_to(init_top,init_left);
	
	if(is_touch_device == false) {
		
		$("body.zoom-out").live("click",function(){
			$(this).removeClass("zoom-out").addClass("zoom-in");
			if($("#center").length != 0) {
				$("#center").remove();
			}
			$("img#main").css({"height":window_height, "width":"auto"});
		});
		
		$("body.zoom-in").live("click",function(e){
			
			var offset_top = e.pageY;
			var offset_left = e.pageX;
			
			var overview_image_width = $("img").width();
			var overview_image_height = $("img").height();
			
			var top = Math.round(((offset_top*image_height)/overview_image_height)-(window_height/2));
			var left = Math.round(((offset_left*image_width)/overview_image_width)-(window_width/2));
			
			scroll_to(top,left);
			
			$(this).removeClass("zoom-in").addClass("zoom-out");
			
			$("img#main").css({"height":image_height, "width":"auto"});
			
		});
	}
	
});


$(window).resize(function(){
	
	var window_height = $(this).height();
	
	$("img#main").delay(250).css({
		"height":window_height, 
		"width":"auto"
	});
		
});

$(window).load(function(){
	
});