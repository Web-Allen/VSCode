//▼———————— The Home ————————▼
$(document).ready(function(){
    $('#aside-title').click(function(){
        $('.items-all').show();
    });

    $('.items').click(function(){
        var id = $(this).prop('id');
        $('.' + id).show();
        $('.' + id).siblings().hide();
    });

    $('.nav-link').click(function(){
        $('.other-sites').toggle();
    });

    $(document).click(function(event){
        var _con = $('.nav-link');      //設置目標區域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('.other-sites').hide();       //淡出消失
        }
    });
});
//▲———————— The Home end ————————▲