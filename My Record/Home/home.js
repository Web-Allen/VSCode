$(document).ready(function(){
    $('#aside-title').click(function(){
        $('.item-all').show();
    });

    $('.item').click(function(){
        var id = $(this).prop('id');
        $('.' + id).show();
        $('.' + id).siblings().hide();
    });

    $('.test1').click(function(){
        $('.test2').toggle();
    });

    $(document).click(function(event){
        var _con = $('.test1');   // 設置目標區域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
          //$('#divTop').slideUp('slow');   //滑動消失
          $('.test2').hide();          //淡出消失
        }
    });
});