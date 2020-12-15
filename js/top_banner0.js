jQuery(function(){
    var cnt = 0;
    var n = $('.top_banner_slide').length-1;
    var clickBt = 0;
    var t=0;

    $('.top_closeBtn1').on({
        click: function(){
            t=1;
            $('.top_banner_slide1').stop().fadeOut(100);
            checkBox1();
        }
    });
    $('.top_closeBtn2').on({
        click: function(){
            t=1;
            $('.top_banner_slide2').stop().fadeOut(100);
            checkBox2();
        }
    });
  
    $('.top_closeBtn3').on({
        click: function(){
            t=1;
            $('.top_banner').stop().fadeOut(100);
            checkBox7();
        }
    });

   
    // 체크박스 선택 시 실행
    function checkBox1(){
        check = check_Form.checkbox_event.checked;
        if(check === true){
            setCookie('notice1','no',1);
        }
        console.log(check_Form);
    }
    function checkBox2(){
        check = check_Form.checkbox_event.checked;
        if(check === true){
            setCookie('notice2','no',1);
        }
    }
    function checkBox3(){
        check = check_Form.checkbox_event.checked;
        if(check === true){
            setCookie('notice3','no',1);
        }
    }


    // 좌우버튼
    $('.top_banner_nextBtn').on({
        click: function(){
            cnt++;
            topBannerSlide();
            
        }
    });
    $('.top_banner_prevBtn').on({
        click: function(){
            cnt--;
            topBannerSlide();
            
        }
    });


    // 체크박스이미지
    $('.chkBox_text').on({
            click: function(){
                if(clickBt==0){
                    clickBt=1;
                    $('.icon_chk').css('backgroundPosition','center');
                }
                else{
                    clickBt=0;
                    $('.icon_chk').css('backgroundPosition','0 0');
                }
            }
    });
     

    // mainslide
    function topBannerSlide(){
        $('.top_banner_slide_wrap').stop().animate({left:(-100*cnt)+'%'},400, function(){
            cnt>=n?cnt=n:cnt;
            cnt<=0?cnt=0:cnt;
            $('.top_banner_slide_wrap').stop().animate({left:(-100*cnt)+'%'},0);
        });
    }
});