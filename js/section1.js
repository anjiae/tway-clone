jQuery(function(){

    var n = $('.sec1Slide').length-3;
    var setId = 0;
    var playBtn = 0;
    var cnt = 0;

    var winW = $(window).innerWidth();
    var winH = $(window).innerHeight();

    
    autoPlay();
    function autoPlay(){
        setId = setInterval(timerCount,3000);
    }

    function timerCount(){
        cnt++;
        mainSlide(cnt);
    }


    function mainSlide(){

        $('.slide-wrap').stop().animate({left:(-100*cnt)+'%'},800,'easeOutExpo', function(){
            cnt>n?cnt=0:cnt;
            cnt<0?cnt=n:cnt;
            $('.slide-wrap').stop().animate({left:(-100*cnt)+'%'},0);
            
        });
        pageNation(cnt>n?cnt=0:cnt);
    }

    $('.pageBtn').each(function(index){
        $(this).on({
            click: function(){
                cnt=index;
                mainSlide(index); 
            }
            
        });
    });   
    
    
    // pagenation
    function pageNation(){
        $('.pageBtn').removeClass('addPageBt');
        $('.pageBtn').eq(cnt).addClass('addPageBt');
    }

    

    //일시정지/재생버튼
    $('.stopBtn').on({
        click: function(){
            if(playBtn==0){
                playBtn=1;
                $(this).find('img').attr('src','img/bg_play.png');
                clearInterval(setId);
            }
            else if(playBtn==1){
                playBtn=0;
                $(this).find('img').attr('src','img/bg_pause.png');
                autoPlay();
            }
        }
    });

        
});