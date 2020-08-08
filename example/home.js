window.onload=function(){
    var block_1 = document.getElementById("block_1");
    block_1.style.opacity=1;
}

$(document).ready(function(){ //文檔就緒
	$('.button').click(function(){
        $('html,body').animate({scrollTop:618}, 666);
        });

        $('.nav').click(function(){   
            $('.links').css("transform","translateX(0)");
        });

        $('.closebtn').click(function(){
            $('.links').css("transform","translateX(-100%)");
        })

        $(document).click(function(event){
            var _con = $('.nav');   //設置目標區域
            if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $('.links').css("transform","translateX(-100%)");
            }
        });
})

