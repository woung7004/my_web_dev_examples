// JavaScript Document

jQuery(document).ready(function(){
	  
	$('.navi>li').mouseover(function(){
		$('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$('.submenu').stop().slideUp(500);
	});
	
	setInterval(function(){ 
	$('.slidelist').delay(2000);
	$('.slidelist').animate({marginLeft:-1200});
	$('.slidelist').delay(2000);
	$('.slidelist').animate({marginLeft:-2400});
	$('.slidelist').delay(2000);
	$('.slidelist').animate({marginLeft:0});
	$('.slidelist').delay(2000);
});
	
	$(function(){
	  $('.tabmenu>li>a').click(function(){
	  	$(this).parent().addClass("active")
						 .siblings()
						 .removeClass("active");
		  return false;
		});
	});
	
	$(".notice li:first").click(function(){
	  $("#layer").addClass("active");
	});
	$(".btn").click(function(){
	  $("#layer").removeClass("active");
	});    
	
	$(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        speed: 1000, // Adjusted speed to a more reasonable value
        controls: true,
        slideWidth: 1200 // Specified slideWidth once
		
	});

	$(function() {
		$('select[name="sitelist"]').change(function() {
			var selectedValue = $(this).val();
			if (selectedValue == '1') {
				window.location.href = 'https://www.ibk.co.kr/wm/wm.ibk';
			}else if(selectedValue == '2'){
				window.location.href = 'http://research.ibk.co.kr/research';
			}else if(selectedValue == '3'){
				window.location.href = 'https://blog.ibk.co.kr/';
			}else if(selectedValue == '4'){
				window.location.href = 'http://ibkmagazine.co.kr/ibkmagazine/202407/index.html';
			}else if(selectedValue == '5'){
				window.location.href = 'http://sports.ibk.co.kr/intro/intro.php';
			}else if(selectedValue == '6'){
				window.location.href = 'https://www.ibk.co.id/index';
			}
		});
	});
});

