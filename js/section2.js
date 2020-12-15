jQuery(function(){

    

   //슬라이드이벤트변수
   var cnt = 0;
   var setId = 0;
   var n = $('.sec2-slide').length-6;
   var viewBoxW = $('.sec2-slide-view').innerWidth(); 
   var cols = 3;
   var slideW = viewBoxW/cols;

    autoPlay();
    function autoPlay(){
        setId = setInterval(cntMainSlide,2000);
    }

    

    //카운트 next메인 함수
    function cntMainSlide(){
        cnt++;
        mainSlide();
    }
    //카운트 prev메인 함수
    function cntPrevSlide(){
        cnt--;
        mainSlide();
    }
    

    // 좌우버튼
    $('.sec2NextBtn').on({
        click: function(){
            if(!$('.sec2-slide-wrap').is(':animated')){
                cntMainSlide();
            }
        }
    });
    $('.sec2PrevBtn').on({
        click: function(){
            if(!$('.sec2-slide-wrap').is(':animated')){
                cntPrevSlide();
            }
        }
    });

    // 좌우화살표이용시,플레이스탑
    
    $('.timerControl').on({
        mouseenter: function(){
            clearInterval(setId);
        },
        mouseleave: function(){
            autoPlay();
        }
    });
    

    // 메인함수
    function mainSlide(){
      $('.sec2-slide-wrap').stop().animate({left:-(slideW*cnt)},800, function(){
          cnt>n?cnt=0:cnt;
          cnt<0?cnt=n:cnt;
          $('.sec2-slide-wrap').stop().animate({left:-(slideW*cnt)},0);
      });
      
     
  }



    
});