jQuery(function(){

   var textW = $('.text').length;

    $('#header').on({
        mouseenter: function(){
            $(this).addClass('addHeader');
            $('.logoBt').find('img').attr('src','img/top_logo (1).png');
            $('.asideImg').find('.login').attr('src','img/ico_top_login (1).png');
            $('.asideImg').find('.search').attr('src','img/ico_top_search (1).png');
            $('.asideImg').find('.allmenu').attr('src','img/ico_top_allmenu (1).png');
            $('.country').find('img').attr('src','img/arr_txt_sel (1).png');
            $('.language').find('img').attr('src','img/arr_txt_sel (1).png');
        },
        mouseleave: function(){
            $(this).removeClass('addHeader');
            $('.logoBt').find('img').attr('src','img/top_logo.png');
            $('.asideImg').find('.login').attr('src','img/ico_top_login.png');
            $('.asideImg').find('.search').attr('src','img/ico_top_search.png');
            $('.asideImg').find('.allmenu').attr('src','img/ico_top_allmenu.png');
            $('.country').find('img').attr('src','img/arr_txt_sel.png');
            $('.language').find('img').attr('src','img/arr_txt_sel.png');
        }
    });

    
    $('.menuBtn').on({
        
        mouseenter: function(){
            $('.subMenu').slideUp(200);
            $(this).next().slideDown(200,'easeOutSine');
            $(this).addClass('addHeaderLine');
           
            
        },
        mouseleave: function(){
            $(this).removeClass('addHeaderLine');
        } 
    });
    
    $('.menu').on({
        mouseleave: function(){
            $('.subMenu').slideUp(200);
            
        }
    });

   
	
	
	

});














