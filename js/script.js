var isWeb;
var isTabl;
var isMobile;

$(document).ready(function(){
	$(window).resize(function(){
		//반응형
		if(jQuery(window).width() > 1015){ //웹
			isWeb = true;
			isTabl = false;
			isMobile = false;
			
			TweenMax.to($(".quickArea"), 1, {right:40, opacity:1, delay:0.5, ease:Power3.easeOut});
			
			// 팝업 높이
			$('.layerPop .popBody').css('height',530);
			// 카드 팝업 높이_제외
			$('.cardPop .popBody').css('height','auto');

			// tab 높이 값 잡기
			heightSizePc();

		}else if(741 < jQuery(window).width() && jQuery(window).width() <= 983){ //태블릿
			isWeb = false;
			isTabl = true;
			isMobile = false;
			
			if(isMgnb == false){
				$(".mMenuArea").css('left', '-100%');
			}

			TweenMax.to($(".quickArea"), 1, {right:'3%', opacity:1, delay:0.5, ease:Power3.easeOut});

			// 팝업 높이
			$('.layerPop .popBody').css('height',530);
			// 카드 팝업 높이_제외
			$('.cardPop .popBody').css('height','auto');

			// tab 높이 값 잡기
			heightSizePc();

		}else if(741 >= jQuery(window).width()){ //모바일
			isWeb = false;
			isTabl = false;
			isMobile = true;

			if(isMgnb == false){
				$(".mMenuArea").css('left', '-100%');
			}

			TweenMax.to($(".quickArea"), 1, {right:'3%', opacity:1, delay:0.5, ease:Power3.easeOut});

			// 팝업 높이
			$('.layerPop .popBody').css('height',$(window).height()-50);

			// tab 높이 값 잡기
			heightSizeMobile();

		}	
		
		// 모바일 화면		
		if($('.mMenuArea').css('display') == 'block'){
			if($('.mMenuArea').position().left == 0){
				$("#wrapper").children().not(".mMenuArea").css('height', '0').css('overflow','hidden');
			}
			
			$(".web_mbl_img").each(function(){
				if( $(this).attr('src') != $(this).data().mblImgPath ){
					$(this).attr('src', $(this).data().mblImgPath);
				}
			});

		}else{
			$("#wrapper").children().not(".mMenuArea").css('height', '').css('overflow','');
			
			$(".web_mbl_img").each(function(){
				if( $(this).attr('src') != $(this).data().webImgPath ){
					$(this).attr('src', $(this).data().webImgPath);
				}
			});
		}
		
	});$(window).resize();

	// 탑버튼
	$(".topBtn").click(function(){
		TweenMax.to($("html, body"), 0.5, {scrollTop:0, ease:Power3.easeOut});
	});

	$(window).scroll(function(){
		if($(".mainPopBan").length < 0){
			if($(window).scrollTop() > 0){
				$("#util").css("margin-bottom", $("#header").outerHeight(true));
				$("#header").css({"position":"fixed"});
				$("#header").addClass("on");
			}else{
				$("#util").css("margin-bottom", 0);
				$("#header").css({"position":"relative"});
				$("#header").removeClass("on");
			}
		}else{
			if($(window).scrollTop() > 150){
				$("#util").css("margin-bottom", $("#header").outerHeight(true));
				$("#header").css({"position":"fixed"});
				$("#header").addClass("on");
			}else{
				$("#util").css("margin-bottom", 0);
				$("#header").css({"position":"relative"});
				$("#header").removeClass("on");
			}
		}

		if($(".mainPopBan").length < 0){
			if($(window).scrollTop() > 0){
				$(".mHeader").css({"position":"fixed"});
			}else{
				$(".mHeader").css({"position":"relative"});
			};
		}else{
			if($(window).scrollTop() > 470){
				if(isWeb == false && isTabl == true && isMobile == false){
					$(".mHeader").css({"position":"fixed"});
				}
			}else if($(window).scrollTop() > 235){
				if(isWeb == false && isTabl == false && isMobile == true){
					$(".mHeader").css({"position":"fixed"});
				}
			}else{
				$(".mHeader").css({"position":"relative"});
			}
		}
		
		
		if($(window).scrollTop() + $(window).height() >= $("#footer").offset().top){
			$(".topBtn").css({"position":"absolute", "bottom":$("#footer").outerHeight(true)});
			$(".topBtn").fadeIn(500);
			if(isWeb == true && isTabl == false && isMobile == false){
				$(".quickArea").css({"position":"absolute", "bottom":$("#footer").outerHeight(true)+70});
			}else if(isWeb == false && isTabl == true && isMobile == false){
				$(".quickArea").css({"position":"absolute", "bottom":$("#footer").outerHeight(true)+50});
			}else if(isWeb == false && isTabl == false && isMobile == true){
				$(".quickArea").css({"position":"absolute", "bottom":$("#footer").outerHeight(true)+50});
			};		
			
		}else{
			$(".topBtn").css({"position":"fixed", "bottom":0});
			$(".topBtn").fadeOut(500);
			if(isWeb == true && isTabl == false && isMobile == false){
				$(".quickArea").css({"position":"fixed", "bottom":70});
			}else if(isWeb == false && isTabl == true && isMobile == false){
				$(".quickArea").css({"position":"fixed", "bottom":50});
			}else if(isWeb == false && isTabl == false && isMobile == true){
				$(".quickArea").css({"position":"fixed", "bottom":50});
			};		
		}
	});

	// GNB
	$("#header .gnb > li").each(function(i){
		$(this).on("mouseenter", function(){
			$("#header .gnb > li").eq(i).addClass("on");
		});
		$(this).on("mouseleave", function(){
			$("#header .gnb > li").eq(i).removeClass("on");
		});
	});
	
	$("#header .gnbArea, #header .gnbBg").mouseenter(function(){
		$(".blackBg").css("z-index",50);
		$(".blackBg").stop().fadeIn(0);
		$("#header .gnbBg").stop().slideDown(300);
		$("#header .gnb .twoD").stop().fadeIn(500);
		$("#header .gnbArea .leftArea").stop().fadeIn(300);	
	});

	
	$("#header .gnbArea, #header .gnbBg").mouseleave(function(){
		$(".blackBg").css("z-index",100);
		$(".blackBg").stop(true,true).fadeOut(0);
		$("#header .gnbBg").stop(true,true).slideUp(100);
		$("#header .gnb .twoD").stop(true,true).fadeOut(0);
		$("#header .gnbArea .leftArea").stop(true,true).fadeOut(100);
		$("#header .gnb > li").removeClass("on");
	});
	
	var maxH = 0;
	var longH;
	$("#header .gnb .thrBt").each(function(){
		$(this).click(function(){
			if($(this).hasClass("on")){
				$(this).removeClass("on");
				$(this).next(".thrD").slideUp(0);
			}else{
				$("#header .gnb .thrBt").removeClass("on");
				$("#header .gnb .thrD").slideUp(0);
				$(this).addClass("on");
				$(this).next(".thrD").slideDown(0);
			}
			$("#header .gnb > li .twoD").each(function(q){
				longH = $(this).height() + 70;
				if(maxH < longH) maxH = longH;
			});
			$("#header .gnbBg").css("height",maxH + 15)
			$("#header .gnbArea .leftArea").css("height",maxH - 120)
			maxH = 0
		})
			
	})


	//모바일GNB
	var mGnbOne = -1;
	var mGnbTwo = -1;
	$(".mMenuArea .gnbArea .oneD").each(function(q){
		if($(this).hasClass("on"))
		{
			mGnbOne = q;
		}
		$(this).click(function(){
			if(mGnbOne != q){
				$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).removeClass("on");
				$(".mMenuArea .gnbArea .twoD").eq(mGnbOne).stop().slideUp(300);
				mGnbOne = q;
				$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).addClass("on");
				if($(".mMenuArea .gnbArea .twoD").find("a").length > 0)
				{
					$(".mMenuArea .gnbArea .twoD").eq(mGnbOne).stop().slideDown(300);
				}
			}else if(mGnbOne == q){
				$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).removeClass("on");
				$(".mMenuArea .gnbArea .twoD").eq(mGnbOne).stop().slideUp(300);
				mGnbOne = -1;
			}
		});
	});

	$(".mMenuArea .gnbArea .twoD a").each(function(q){
		if($(this).hasClass("on"))
		{
			mGnbTwo = q;
		}
		$(this).click(function(){
			if(mGnbTwo != q){
				$(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).removeClass("on");
				$(".mMenuArea .gnbArea .twoD .thrD").stop().slideUp(300);
				mGnbTwo = q;
				$(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).addClass("on");
				if($(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).next(".thrD").find("a").length > 0)
				{
					$(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).next(".thrD").stop().slideDown(300);
				}
			}else if(mGnbTwo == q){
				$(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).removeClass("on");
				$(".mMenuArea .gnbArea .twoD .thrD").stop().slideUp(300);
				mGnbTwo = -1;
			}
		});
	});
	
	var isMgnb = false;
	$(".mHeader .menuBtn").click(function(){
		if(isMgnb == false){
			TweenMax.to($(".mMenuArea"), .8, {left:0, ease:Power3.easeOut, onComplete:function(){
				$(".mMenuArea").css('position', 'relative').css('height','');
				$("body, html").scrollTop(0);
				$("#wrapper").children().not(".mMenuArea").css('height', '0').css('overflow','hidden');
			}});

			isMgnb = true;
		}
	})
	$(".mMenuArea .top .closeBt").click(function(){
		if(isMgnb == true){
			$(".mMenuArea").css('position', 'absolute');
			$("#wrapper").children().not(".mMenuArea").css('height', '').css('overflow','');
			TweenMax.to($(".mMenuArea"), .8, {left:'-100%', ease:Power3.easeOut});

			isMgnb = false;
		}
	});
	
	// blackBg 클릭 시 이벤트 
	$(".blackBg").click(function(){
		if($("#header .right .srchBtn a").hasClass("on")){
			$("#header .right .srchBtn a").removeClass("on");
			$("#header .srchArea").stop().slideUp(300);
			$(".blackBg").stop().fadeOut(300, function(){
				$(".quickArea").css("z-index","70");
			});
		}else if($(".quickArea .quickBtn").hasClass("on")){
			$(".quickArea .quickBtn").removeClass("on");
			$(".blackBg").stop().fadeOut(300);
			$(".quickArea .quickOpen").fadeOut(300);
		}
		isSrchOn = false;
		gnbNum = -1;
	});

	// 영역 밖 클릭 시 이벤트
	$(document).click(function(e){
		if($("#util .container .right .lang").has(e.target).length === 0){
			$("#util .container .right .lang").children("a").removeClass("on");
			$("#util .container .right .lang").children("div").slideUp(200);
		}
		if($(".openSel").has(e.target).length === 0){
			$(".openSel").find(".option").slideUp(200);
		}
		if($(".lnbArea .lnb").has(e.target).length === 0){
			$(".lnbArea .lnb > div > a").removeClass("on");
			$(".lnbArea").find(".moreMenu").slideUp(200);
		}
		if($(".lnbArea .shareArea").has(e.target).length === 0){
			$(".lnbArea .shareArea .share > a.on").removeClass("on");
			$(".lnbArea .shareArea .share > div").slideUp(200);
		}
		if($(".grayPopArea").has(e.target).length === 0){
			$(".grayPopArea > a").removeClass("on");
			$(".grayPopArea").find(".grayPop").hide();
		}
	});

	// LNB 클릭 시
	$(".lnbArea .lnb > div > a").click(function(){
		if(!$(this).hasClass("on")){
			$(".lnbArea .lnb > div > a").removeClass("on");
			$(".lnbArea .lnb > div > div").css("z-index", "0").slideUp(300);
			$(this).addClass("on");
			$(this).next().css("z-index", "15").slideDown(300);
		}else{
			$(this).removeClass("on");
			$(this).next().css("z-index", "0").slideUp(300);
		}
	});
	
	// 공유하기 클릭 시
	$(".lnbArea .shareArea .share > a").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).next().css("z-index", "15").slideDown(300);
		}else{
			$(this).removeClass("on");
			$(this).next().css("z-index", "0").slideUp(300);
		}
	});

	// 검색영역 셀렉트 클릭 시
	$(".srchSel > a").click(function(){
		if(!$(this).hasClass("on")){
			$(".srchSel > a").removeClass("on");
			$(".srchSel > div").slideUp(300);
			$(this).addClass("on");
			$(this).next().stop().slideDown(300);
		}else{
			$(this).removeClass("on");
			$(this).next().slideUp(300);
		}
	});
	$(".srchSel > div a").click(function(){
		var selTxt = $(this).text();
		$(this).siblings(".active").removeClass("active");
		$(this).addClass("active");
		$(this).parent().siblings("a").text(selTxt).removeClass("on");
		$(this).parent().slideUp(300);
	});
	$(".srchSel").focusout(function(){
		$(this).children("a").removeClass("on");
		$(this).children("div").delay(100).slideUp(300);
	});
	
	// 분류 검색 창_이달의 혜택 
	$(".srchType3 .radio p").each(function(index){
		$(this).click(function(){
			if(!$(this).hasClass("on")){
				$(".srchType3 .radio p").removeClass("on");
				$(".srchType3 .radio p").find("input").attr("checked",false);
				$(this).addClass("on");
				$(this).find("input").attr("checked",true)
			}	
			if(!$(".srchType3 .radio p").eq(0).hasClass("on")){ //분류 검색 일 경우
				$(".select").hide(0);
				$(".input").show(0);
			}else{
				$(".select").show(0); //직접 입력 일 경우
				$(".input").hide(0);
			}
		});
	});

	// 검색영역3 셀렉트 클릭 시
	$(".srchType3 .srchSel > div a").click(function(){
		$(this).parents(".srchSel").children("a").addClass("active");
	});

	// 이미지 롤링
	var imgSwiper = new Swiper('.exhibitionDiv .swiper-container.imgRollArea', {
		slidesPerView: 1,
		speed: 800,
		loop: true,
		autoplay:{
			delay:5000,
		},
		autoHeight:false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
		on: {
			init: function () {
				console.log("initialization");
			},
		}
	});
	$(".exhibitionDiv .imgRollArea .swiper-pagination").append("<a href='javascript:' class='playBtn'></a>");
	$(".exhibitionDiv .imgRollArea .playBtn").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			imgSwiper.autoplay.stop();
		}else {
			$(this).removeClass("on");
			imgSwiper.autoplay.start();
		}
	});


	// 탭버튼 클릭 시
	$(".tabArea").each(function(i){
		$(".tabArea").eq(i).find(".tabBtn a").each(function(j){
			$(this).click(function(){
				$(".tabArea").eq(i).find(".tabBtn a").removeClass("on");
				$(this).addClass("on");
				$(".tabArea").eq(i).find(".tabCon").hide();
				$(".tabArea").eq(i).find(".tabCon").eq(j).show();
			});
		});
	});
	
	//Q&A리스트
	var curQna = -1;
	
	$(".qnaDiv .qnaList").eq(0).find("li").each(function(q){
		$(this).find("a").click(function(){
			if(curQna == q){
				$(".qnaDiv .qnaList").eq(0).find("li a p").eq(curQna).removeClass("on");
				$(".qnaDiv .qnaList").eq(0).find("li").eq(curQna).find(".answerDiv").stop().slideUp(350);
				curQna = -1;
			}else if(curQna != q){
				$(".qnaDiv .qnaList").eq(0).find("li a p").eq(curQna).removeClass("on");
				$(".qnaDiv .qnaList").eq(0).find("li").eq(curQna).find(".answerDiv").stop().slideUp(350);
				curQna = q;
				$(".qnaDiv .qnaList").eq(0).find("li a p").eq(curQna).addClass("on");
				$(".qnaDiv .qnaList").eq(0).find("li").eq(curQna).find(".answerDiv").stop().slideDown(350);
			};
		});
	});


	// 레이어팝업 닫기
	var arrChkPop;
	$(".layerPop .popClose").click(function(){
		$(this).parent(".layerPop").stop().fadeOut(300);
		arrChkPop = new Array();

		$(".layerPop").each(function(q){
			if($(".layerPop").eq(q).is(":visible")){
				arrChkPop.push(q);
			}
		});

		if(arrChkPop.length == 1) $(".blackBg").stop().fadeOut(300);
		$('body').removeClass("lypopOpen");
	});

	// 팝업 닫기 (확인 버튼)
	$(".layerPop .confirmBtn.close").click(function(){
		$(".blackBg").stop().fadeOut(300);
		$(".layerPop").stop().fadeOut(300);
		$('body').removeClass("lypopOpen");
	});

	
	// 스크롤
	if($(".scrollbox").size() != 0){
		$(".scrollbox").mCustomScrollbar({
			scrollInertia:50,
			advanced:{
                updateOnContentResize: true
            }
		});	
	}    

	//검색시 삭제버튼 2018-05-17
	$(".srchType1 .input input").keydown(function(){
		if($(".srchType1 .input input").val().length > 1){
			$(this).next("a").css('display', 'inline-block');
		}else{
			$(this).next("a").css('display', 'none');
		}
	});
	$(".srchType1 .input a").click(function(){
		$(".srchType1 .input input").val('');	
		$(this).css('display', 'none');
	});

	$(".srchType3 .input input").keydown(function(){
		if($(".srchType3 .input input").val().length > 1){
			$(this).next("a").css('display', 'inline-block');
		}else{
			$(this).next("a").css('display', 'none');
		}
	});
	$(".srchType3 .input a").click(function(){
		$(".srchType3 .input input").val('');	
		$(this).css('display', 'none');
	});
}); 

function heightSizePc(){
	// tab 버튼 높이 잡기
	var maxH = 0;
	var longH;

	$('.tabBtn a span').each(function(q){
		longH = $('.tabBtn a span').eq(q).height() + 1;
		if(maxH < longH) maxH = longH;	
		$('.tabBtn a').css('height', maxH+38);
	});
}

function heightSizeMobile(){
	// tab 버튼 높이 잡기
	var maxH = 0;
	var longH;

	$('.tabBtn a span').each(function(q){
		longH = $('.tabBtn a span').eq(q).height() + 1;
		if(maxH < longH) maxH = longH;	
		$('.tabBtn a').css('height', maxH+18);
	});
}