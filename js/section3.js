jQuery(function(){

var n = $('.sec3Slide').length-8;
var cnt = setId = 0;
var viewBox = $('.sec3_viewBox').innerWidth();
var cols = 4;
var slideW = viewBox/cols;
var playBtn = 0;

autoTimer();

function autoTimer() {
    setId = setInterval(countNextSlide,2000);
}

// 일시정지버튼클릭
$('.sec3PauseBtn').on({
    click: function(){
        if(playBtn==0){
            playBtn=1;
            $(this).find('img').attr('src','img/bg_play2.png');
            clearInterval(setId);
        }
        else if(playBtn==1){
            playBtn=0;
            $(this).find('img').attr('src','img/bg_pause2.png');
            autoTimer();
        }
        console.log(playBtn);
    }
});

// 페이지버튼클릭
$('.sec3-pageBtn').each(function(idx){
    $(this).on({
        click: function(){
            cnt=idx;
            sec3MainSlide(idx);
            clearInterval(setId);
        }
    });
});

// 슬라이드버튼클릭
$('.sec3_nextBt').on({
    click: function(){
        if(!$('.sec3SlideWrap').is(':animated')){
            countNextSlide();
        }
    }
});
$('.sec3_prevBt').on({
    click: function(){
        if(!$('.sec3SlideWrap').is(':animated')){
            countPrevSlide();
        }
    }
});

$('.timerControl').on({
    mouseenter: function(){
        clearInterval(setId);
    },
    mouseleave: function(){
        autoTimer();
    }
});

// pagenation
function pageNation(){
    $('.sec3-pageBtn').removeClass('addPageBt');
    $('.sec3-pageBtn').eq(cnt).addClass('addPageBt');
}

function countNextSlide() {
    cnt++;
    sec3MainSlide(cnt);

}
function countPrevSlide(){
    cnt--;
    sec3MainSlide();
}

function sec3MainSlide(){
    
    $('.sec3SlideWrap').stop().animate({left:-(slideW*cnt)},800, function () {
        cnt>n?cnt=0:cnt;
        cnt<0?cnt=n:cnt;
        $('.sec3SlideWrap').stop().animate({left:-(slideW*cnt)},0);
    });
    pageNation(cnt>n?cnt=0:cnt);
}




});