function close_window() {
  close();
}

$(document).ready(function(){
    var scroll_start = 0;
    var start_change = $('.nav');
    console.log("from script");
    var offset = start_change.offset();
    if($(window).width() <= 766){
        console.log("in condition");
        $(".navbar").css('margin','0 auto');
        $(".navbar").css('text-align','center');
    }
    if(start_change.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top){
                $(".navbar").css('background-color','#808080');
                $(".navbar").css('height','50px !important');
                $(".navbar-brand").css('display','none');
                $(".navbar-nav > a").css('color','white');
                $(".dropdown > a").css('color','white');
                $("#myTogglerNav").css('color','black');
            }
            else{
                $(".navbar").css('background-color','white');
                $(".navbar-nav > a").css('color','#2d2d2d');
                $(".dropdown > a").css('color','#2d2d2d');
                $(".navbar-brand").css('display','inline-block');
                $(".navbar-nav > a").hover(function(){
                    $(this).css("border-bottom", "2px solid white");
                    }, function(){
                    $(this).css("border-bottom", "");
            });
            }
        });
    }
});

