$(function(){
	$("#toTop").click(function(){
		$("html,body").animate({
			scrollTop:"0px"
		},"fast");
	});
				
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$("#toTop").fadeIn(1000);
		}else{
			$("#toTop").fadeOut(1000);
		}
	});
});