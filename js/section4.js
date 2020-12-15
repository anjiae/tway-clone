jQuery(function(){

    var cnt = 0;
    var setId = 0;
    var n = $('.sec4_sl_content').length-3;
    var playBtn = 0;

    autoPlay();
    function autoPlay(){
        setId = setInterval(countSlideNext,3000);
       
    }

    function countSlideNext(){
        cnt++;
        sec4MainSlide();
    }
    function countSlidePrev(){
        cnt--;
        sec4MainSlide();
    }


    // 페이지버튼
    $('.sec4PageBtn').each(function(index){
        $(this).on({
            click: function(){
                cnt=index;
                sec4MainSlide(index);
            }
        });
    });

    // 좌우버튼
    $('.sec4_nextBt').on({
        click: function(){
            if(!$('.sec4_slide_wrap').is(':animated')){
                countSlideNext();
            }
        }
    });
    $('.sec4_prevBt').on({
        click: function(){
            if(!$('.sec4_slide_wrap').is(':animated')){
                countSlidePrev();
            }
        }
    });

    $('.timerControl').on({
        mouseenter: function(){
            clearInterval(setId);
        },
        mouseleave: function(){
            autoPlay();
        }
    });


    // 페이지네이션
    function pageNation(){
        $('.sec4PageBtn').removeClass('addSec4Btn');
        $('.sec4PageBtn').eq(cnt).addClass('addSec4Btn');
    }
    // 일시정지/재생
    $('.sec4PauseBtn').on({
        click: function () {
            if(playBtn==0){
                playBtn=1;
                $(this).find('img').attr('src','img/bg_play2.png');
                clearInterval(setId);
            }
            else if(playBtn==1){
                playBtn=0;
                $(this).find('img').attr('src','img/bg_pause2.png');
                autoPlay();
            }
        }
    });

    function sec4MainSlide(){
        $('.sec4_slide_wrap').stop().animate({left:(-100*cnt)+'%'},800, function(){
            cnt>n?cnt=0:cnt;
            cnt<0?cnt=n:cnt;
            $('.sec4_slide_wrap').stop().animate({left:(-100*cnt)+'%'},0);
        });
        pageNation(cnt>n?cnt=0:cnt);
    }


});