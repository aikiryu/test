$(document).ready(function(){
	// hide preloder
	$(".preloader").hide();

	// header animation on scroll
	$(window).on('load scroll',function() {
		if ($(this).scrollTop() >= 100) {
			// show header
			$("header.main-header").addClass("shown");
		} else {
			// hide header
			$("header.main-header").removeClass("shown");    
		} 
	});

	// input 1 styles
	$(".input__1 input, .textarea__1 textarea").focus(function(){
		if($(this).parent().hasClass("input__1"))
			$(this).prev().removeClass("input__1_blurred").addClass("input__1_focused");
		else if($(this).parent().hasClass("textarea__1"))
			$(this).prev().removeClass("textarea__1_blurred").addClass("textarea__1_focused");

		$(this).prev().parent().css({
			borderBottom : "solid 2px #3f50a5"
		});
	});
	$(".input__1 input, .textarea__1 textarea").blur(function(){
		if($(this).val() === ""){
			if($(this).parent().hasClass("input__1"))
				$(this).prev().addClass("input__1_blurred").removeClass("input__1_focused");
			else if($(this).parent().hasClass("textarea__1"))
				$(this).prev().addClass("textarea__1_blurred").removeClass("textarea__1_focused");
			$(this).prev().parent().css({
				borderBottom : "solid 2px #4e4f50"
			});
		}
	});

	// add margin to header's next element
	$("header.main-header").next().css("margin-top","85px");

	// drop down in menu
	$("ul.first-level_menu").children("li").children("a").each(function(){
		$(this).click(function(e){
			$("ul.second-level_menu").each(function(){
				$(this).slideUp(200, "easeInCirc");
			});

			if($(this).next("ul.second-level_menu").html() !== undefined){
				e.preventDefault();
				$(this).next("ul.second-level_menu").slideToggle(200, "easeInCirc");
			}
		});
	});

	// show menu content
	$(".menu").click(function(){
		$(".menu-content").animate({
			left : "0",
			opacity : "1"
		},200,"easeInCirc");
		$(".menu-wrapper").delay(300).fadeIn(200,"easeInCirc");
		$(".first-level_menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay((_index * 25) + 100).animate({
				marginBottom : '0',
				opacity : "1"
			},200);
		});
	});

	// hide meny content
	$(".close-button").click(function(e){
		e.preventDefault();
		var links_length = $(".first-level_menu").children("li").length;
		// reset links' styles
		$(".first-level_menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay( ( (links_length - _index) * 25 ) + 100 ).animate({
				marginBottom : '50px',
				opacity : "0"
			},200);
		});
		// hide menu link
		$(".menu-wrapper").delay( (links_length * 25) + 200).fadeOut(200,"easeInCirc");
		// hide menu content
		$(".menu-content").delay( (links_length * 25) + 600).animate({
			left : "-100%",
		},200,"easeInCirc");
	});
	
$(function(){//실행틀 시작
	//1) 필요한 변수를 모아둠.
	var current = 0;  
	//변수current에 현재의 순서값을 나타내는0을 저장
	var thumSize = 3;
	//한 번에 출력될 이미지의 갯수를 지정
	var thumWrap = $(".img_list");
		//이미지틀을 저장
	var thumWrapWidth = thumWrap.width();
	//thumWrap의 너비값 저장
	//thumWrap의 너비값 = ul태그가 움직일 거리
	var thumUL = thumWrap.find("ul");
	var thum = thumUL.find("li");
	//변수thum에 이미지 하나씩을 담고있는 li태그를 저장함
	var maxSize = thum.size();
	//maxSize에 thum의 총 갯수를 저장시킴
	var prev = $(".img_wrap .btn_l");
	var next = $(".img_wrap .btn_r");
	
	
	//5)prev를 클릭한다면
	
	next.click(function(){
		//6)current의 값을 먼저 설정해야함 단 조건을 사용해 값이 증가될 수 있는 범위를 제한시켜야함
		//현재 값에 1씩 증가하도록
		//if(조건)조건이참일때 실행 될 명령
		//if(currunt의 값<전체li의 갯수/한판의 갯수) 현재값에서 1씩 증가
		if(current<maxSize/thumSize-1) current++;
		//7)move()함수를 호출
		move();
		//8)a태그 클릭햇을때 발생되는 링크 무효화
		return false;
		});
	
	prev.click(function(){
		//9)넥스트!!
		if(current>0) current --;
		
		//7)move()함수를 호출
		move();
		return false;
		});
	
	//2)thum_ul의 움직임을담을 함수 ㅇㅅㅇ
	
	function move(){
	//3)변수 tl을 만들어 thumUL이 가지게 될 marginLeft값을 설정하도로 함.
	 var tl = thumWrapWidth * current * -1;
	 //4)thumUL에 움직임을 적용시킴
	 thumUL.stop().animate({marginLeft:tl},500,"easeOutQuint");
	 
	 
		}//move()의 끝
	
	
	
	})//끗
});