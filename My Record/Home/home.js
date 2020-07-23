//▼———————— The Home ————————▼
$(document).ready(function(){   //文檔就緒
    $('#aside-title').click(function(){            //點擊Home.html的左欄標題
        $('.items-all').show();                    //右邊內容全部顯示
        $('.aside-ul li').css('box-shadow', '');   //點擊Home.html的左欄標題，左邊li的box-shadow改為原值。
    });

    $('.items').click(function(){     //點擊左欄.items
        var id = $(this).prop('id');  //獲取當前id到id   
        $('.' + id).show();           //對應class id顯示右邊內容          
        $('.' + id).siblings().hide();//對應class id隱藏右邊兄弟內容
        $(this).siblings().css('box-shadow', '');                   //.items兄弟的box-shadow改為原值
        $('.active-li').css('box-shadow', 'none');                  //.active-li的box-shadow改為none
        $(this).css('box-shadow', 'inset -3px 0 6px 6px #5b9ef0');  //更改.items的box-shadow
    });

    $('.nav-link-1 a').mousedown(function(){   //mousedown頭部的a連結，其他a連接的box-shadow為none。
        $(this).siblings().css('box-shadow', 'none');
    });

    $('.nav-link-2').click(function(){   //點擊頭部最右邊的圖示，顯示或隱藏其他連結。
        $('.other-sites').toggle();
    });

    $(document).click(function(event){
        var _con = $('.nav-link-2');   //設置目標區域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('.other-sites').hide();   //淡出消失
        }
    });
});
//▲———————— The Home end ————————▲

//▼———————— 其他html ————————▼
$(document).ready(function(){
	$('.up').click(function(){ 
    $('html,body').animate({scrollTop:0}, 333);
    });
});
//▲———————— 其他html結束 ————————▲