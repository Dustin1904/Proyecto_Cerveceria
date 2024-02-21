(function(){

    var fulheight = function(){
        if(!isMobile.any()){
            $(".js-fullheight").css("height",$(window).height());
            $(window).resize(function(){
                $(".js-fullheight").css("height", $(window).height());
            });
        }
    };

    $(function (){
        fulheight();
    });


})();