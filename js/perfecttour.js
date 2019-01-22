$(document).ready(function(e) {

			// img 반응형처리
            $("#adsec img, .resizablebox").each(function() {
                var oImgWidth = $(this).width();
                var oImgHeight = $(this).height();
                $(this).css({
                    'max-width':oImgWidth+'px',
                    'max-height':oImgHeight+'px',
                    'width':'100%',
                    'height':'100%'
                });
            });
			
			$("#company img, .resizablebox").each(function() {
                var oImgWidth = $(this).width();
                var oImgHeight = $(this).height();
                $(this).css({
                    'max-width':oImgWidth+'px',
                    'max-height':oImgHeight+'px',
                    'width':'100%',
                    'height':'100%'
                });
            });
			
			
	// PC버전 gnb 출력
    var menuNum = 4;
    var menulist = new Array(); 
         
    for(var i=0; i<menuNum; i++){
            menulist[i] = new Array();
            for(var j=0; j<2; j++){
             menulist[i][j] = new Array();
            }         
    }
    menulist[0][0][0]="회사소개";
    menulist[0][0][1]="회사소개";
    menulist[0][0][2]="영상갤러리";
    menulist[0][0][3]="희망여행지";
	menulist[0][0][4]="FAQ";	
	menulist[0][0][5]="오시는 길";
    
    menulist[0][1][0]="#company";
    menulist[0][1][1]="#company";
    menulist[0][1][2]="#video_gallery";
    menulist[0][1][3]="#place_hope";
	menulist[0][1][4]="#FNQ";
	menulist[0][1][5]="#directions";    
	
    menulist[1][0][0]="여행지 정보 보러가기";
    menulist[1][0][1]="PerfectTour";
    menulist[1][0][2]="여행필수품";
    
    menulist[1][1][0]="http://rlaehdgh333.cafe24.com/ho/";
    menulist[1][1][1]="http://rlaehdgh333.cafe24.com/ho/";
    menulist[1][1][2]="http://coocha.co.kr/search/searchDealList?keyword=%EC%97%AC%ED%96%89%EB%AC%BC%ED%92%88"
    
    menulist[2][0][0] ="특수지역/허니문";
    menulist[2][0][1]=">아프리카 + 두바이";
    menulist[2][0][2]=">요르단 + 두바이";
    menulist[2][0][3]=">조금더 편하게, 특별한 북인도";
	  
    menulist[2][1][0]="http://www.lottetour.com/promotion/9204";
    menulist[2][1][1]="http://www.lottetour.com/promotion/9204";
	menulist[2][1][2]="http://www.lottetour.com/promotion/8579";
	menulist[2][1][3]="http://www.lottetour.com/promotion/8841";
	
	menulist[3][0][0] ="항공정보";
    menulist[3][0][1]="하나 투어";
    menulist[3][0][2]="모두 투어";

    menulist[3][1][0]="www.hanatour.com";
    menulist[3][1][1]="www.hanatour.com";
	menulist[3][1][2]="www.modetour.com";
	
    var tags ="";    
 
	
    tags +="<ul id='gnb' class='gnb'>";
    for(var x=0; x<menuNum; x++){        
        tags+="<li><a class='oneD' href='"+menulist[x][1][0]+"'>"+menulist[x][0][0]+"</a><div class='twoD'>";
		
        for(var i=1; i<menulist[x][1].length; i++){
            tags+="<a href='"+menulist[x][1][i]+"'>"+menulist[x][0][i]+"</a>";
        }
        tags+="</div></li>";        
    }
    tags +="</ul>";
    
    $('#gnbArea_PC').append(tags);



//navi
	$('#gnb > li').hover(function(){
		$(this).addClass("on");
		$(".back_img").css("display","block");
			if($("#gnb>li").eq(0).hasClass("on")){
		$(".back_img").css({
			'background' : 'url(/perfecttour/img/logo/office.png)', 'background-repeat' : 'no-repeat', 'background-position':'right top','background-size':'150px',
			'height' : '260px',
		});		
	}else if($("#gnb>li").eq(1).hasClass("on")){
		$(".back_img").css({
			'background' : 'url(/perfecttour/img/logo/information.png)', 'background-repeat' : 'no-repeat', 'background-position':'right top','background-size':'150px',
			'height' : '260px',
		});			
	}else if($("#gnb>li").eq(2).hasClass("on")){
		$(".back_img").css({
			'background' : 'url(/perfecttour/img/logo/unique.png)', 'background-repeat' : 'no-repeat', 'background-position':'right top','background-size':'150px',
			'height' : '260px',
		});			
	}else if($("#gnb>li").eq(3).hasClass("on")){
		$(".back_img").css({
			'background' : 'url(/perfecttour/img/logo/modetour.png)', 'background-repeat' : 'no-repeat', 'background-position':'right top','background-size':'150px',
			'height' : '260px',
		});				
	}
	
		
		
	},function(){
		$(".back_img").css("display","none");
		$(this).removeClass("on");
	});
    $('#header').hover(function(){
		$(".gnbBg").css({
			'height' : '300px',
			'border-top' : '2px solid #1c7c57',
			'background-color' : 'white'		
		});
		$(".leftArea").css("display","block");
		$(".twoD").css("display","block");
        $(".leftArea").animate({
            //opacity: '1'
        });
		$(".twoD").animate({
           // opacity: '1'
        });
    }, function() {
		$(".gnbBg").css({
			'height' : '0',
			'border-top' : '0',
		});		
		$(".leftArea").css("display","none");
		$(".twoD").css("display","none");
		$(".leftArea").animate({
            //opacity: '0'
        });
		$(".twoD").animate({
            //opacity: '0'
        });
		
		
    });


	

//header
    var _win =$(window);
	var _header = $("#header").height();
	var position = $(window).scrollTop();//스크롤탑위치
    var _winPos = _win.scrollTop(); //처음 화면이 열렸을때 좌표 1회
	
    _win.scroll(function(e) {
         _winPos = _win.scrollTop(); 
        //scroll이벤트안에 선언해서 매 스크롤터질때 마다 새롭게 값을 얻어내라
        if(_winPos > _header){
			$("#header").addClass("on");
			$("#header").css({
				'position' : 'fixed',
			});
        }else{
			$("#header").removeClass("on");
			$("#header").css({
				'position' : 'relative',
			});
		}
		
	var scroll = $(window).scrollTop();
	if($("body").width() <= 1000) $("#header").css("display","none");
	if($("body").width() >= 1000){
	    if(scroll > position) {

    	$("#header").css("display","none");
    	} else {

         $("#header").css("display","block")
   		 }
    position = scroll;
	
	}

		
    });    
    $('.box ul li span').click(function(e) {
        $(this).parent().remove(); //실제 태그만 실행
    });


//top버튼    
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
	
	
//모바일
	$(".menuBtn").click(function(e) {
		$(".mMenuArea").css({
			'display' : 'block',
			'left' : '0',
			'position' : 'relative'
		});
	$(".closeBt").click(function(e) {
		$(".mMenuArea .gnbArea .oneD").removeClass("on");
        $(".mMenuArea").css({
			'left' : '-100%',
			'position' : 'absolute'	
		});
    });	

	$(".mMenuArea .gnbArea .oneD").click(function(e) {
		if($(this).hasClass("on")){
			$(this).removeClass("on");	
			$("+ .twoD",this).css({//this의 동생(형제)태그 셀렉터
				'display' : 'none',
				'opacity' : '0',	
			});	
		}else{
			$(this).addClass("on");
			$("+ .twoD",this).css({
				'display' : 'block',
				'opacity' : '1',	
			});
		}
    });

    });
$(".box_wrap").children().addClass("on");
var playAlert = setInterval(function() {
	if(!$(".box_wrap").children().hasClass("on")){
			$(".box_wrap").children().addClass("on");
		}else{
			$(".box_wrap").children().removeClass("on");
	}
}, 5000);
 
 
//company
 $("#introduction").each(function(index, element) {
	 var _this = $(this);
	 var _thisTop = $(this).offset().top;         
	$(window).scroll(function(e) {
		var _winPos = $(window).scrollTop(); //스크롤할때마다 받아낸다
		if(_thisTop <= _winPos ){ //각섹션의 상단이 스크롤상단과 같아지면
			if(_this.attr('id')=='introduction'){ //아이디가 adBack인 section이라면
			$("#square2_on").addClass("on"); //실행
			}
		}
	});
}); 
 $("#introduction_2").each(function(index, element) {
	 var _this = $(this);
	 var _thisTop = $(this).offset().top;         
	$(window).scroll(function(e) {
		var _winPos = $(window).scrollTop(); //스크롤할때마다 받아낸다
		if(_thisTop <= _winPos ){ //각섹션의 상단이 스크롤상단과 같아지면
			if(_this.attr('id')=='introduction_2'){ //아이디가 adBack인 section이라면
			$("#square3_on").addClass("on"); //실행
			}
		}
	});
}); 

 
//FNQ
$(".faq_tab li").click(function(e) {
    $(".faq_tab li").removeClass("on");
	$(this).addClass("on");
	if($(".faq_tab li").eq(0).hasClass("on")){
		$(".faq_article").eq(0).addClass("on");
		$(".faq_article").eq(1).removeClass("on");
	}else{
		$(".faq_article").eq(1).addClass("on");
		$(".faq_article").eq(0).removeClass("on");
	}
});

$(".faq_article li").click(function(e) {
	if($(this).hasClass("on")){
		$(this).removeClass("on");
		$('> .a',this).css("display","none");
	}else{
		$(".faq_article li").removeClass("on");
		$(this).addClass("on");
		$('> .a',".faq_article li").css("display","none");
		$('> .a',this).css("display","block");
	}
	
});

$(window).resize(function(e) {
    
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



	