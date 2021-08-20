(function ($) {
    $(document).ready(function () {
        $(".toggle-icon").click(function(){
            $("body").toggleClass("toggleClass");
            $(".page-body-wrapper").toggleClass("toggleNav");
        });

       $("ul.header-right-bar > li").click(function () {
            if(!$(this).hasClass('active')){
                $("ul.header-right-bar > li").removeClass("active"); 
                $(this).addClass("active");  
            } else {
                $("ul.header-right-bar > li").removeClass("active"); 
            }
        });


        

        $("a.icon-three-dots-vertical-header").click(function(){
            $("body").toggleClass("rightbar-menu");
            $("header").toggleClass("rightbar-menu-nav");
        });


     



   
    });
})(jQuery);