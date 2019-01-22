$(document).ready(function(e) {
	//슬라이드
     $('.main_slider').bxSlider({
	 	
	 });

//네비 액션
	 var didScroll;
	 var lastScrollTop = 0; 
	 var delta = 5; 
	 var navbarHeight = $('header').outerHeight(); 
	 

	$(window).scroll(function(e) {
      $(window).scroll(function(event){ didScroll = true; });
	  setInterval(function() { 
	 if (didScroll) { hasScrolled(); didScroll = false; } }, 250); 
	  
	 function hasScrolled() { var st = $(this).scrollTop(); 
	  
	 if(Math.abs(lastScrollTop - st) <= delta) return;
	 
	 if (st > lastScrollTop && st > navbarHeight){ 
	 // Scroll Down 
	     	$(".top_gnb").css({
			'height' : '35px',
			'background-color' : 'white'
		});	 
	 $('header').addClass('slide');

	 }else { 
	 // Scroll Up 
	 if(st + $(window).height() < $(document).height()) {
		$('header').removeClass('slide'); }} lastScrollTop = st; }

    });




    $('#gnb').hover(function(){
    	$(".top_gnb").css({
			'height' : '200px',
			'background-color' : 'white',
			'transition' : '0.8s'
		});
    }, function() {
        $(".top_gnb").css({
			'height' : '35px',
			'background-color' : 'white',

		});
    });


//top버튼
    var _win =$(window);
    var _winPos = _win.scrollTop(); //처음 화면이 열렸을때 좌표 1회
    
    _win.scroll(function(e) {
         _winPos = _win.scrollTop(); 
        //scroll이벤트안에 선언해서 매 스크롤터질때 마다 새롭게 값을 얻어내라
        if(_winPos > 0){
        $("#top").addClass("show");
        }else{
        $("#top").removeClass("show");
        }
    });    
    $('.box ul li span').click(function(e) {
        $(this).parent().remove(); //실제 태그만 실행
    });

	$("#top").click(function(e) {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
          return false;
    });

/*	var barTopStart = parseInt($(".top_gnb").css("top"));
    $(window).scroll(function(e) {
        //scrollTop()
		if($(window).scrollTop()>barTopStart){
			$(".top_gnb").addClass("scroll");
		}else{
			$(".top_gnb").removeClass("scroll");
		}
		
    });
*/


});



	