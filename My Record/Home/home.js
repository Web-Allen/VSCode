//▼———————— The Home ————————▼
$(document).ready(function(){
    $('#aside-title').click(function(){
        $('.items-all').show();
        $('.aside-ul li').css('background-color', '');
    });

    $('.items').click(function(){
        var id = $(this).prop('id');
        $('.' + id).show();
        $('.' + id).siblings().hide();
        $(this).css('box-shadow', 'inset -3px 0 6px 6px #5b9ef0');
        $(this).siblings().css('box-shadow', '');
    });

    $('.nav-link-2').click(function(){
        $('.other-sites').toggle();
    });

    $(document).click(function(event){
        var _con = $('.nav-link-2');      //設置目標區域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('.other-sites').hide();       //淡出消失
        }
    });
});
//▲———————— The Home end ————————▲