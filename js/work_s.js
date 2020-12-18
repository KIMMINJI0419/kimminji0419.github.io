console.log("Script Load");
// Passive를 끈 상태에서 기본 이벤트 제거
window.addEventListener("mousewheel", function (event) {
    event.preventDefault();
  }, { passive: false });

(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        var page = 1;
        var page_vid = $(".video_p").length;
        var page_3d = $(".p_3d").length;
        var page_web = $(".web_p").length;

        $(window).on("mousewheel", function (e) {
            if ($("html").is(":animated")) return;

            if (e.originalEvent.deltaY > 0) {
                console.log(e.originalEvent.deltaY);
                if (page == page_vid) return;
                if (page == page_3d) return;
                if (page == page_web) return;
                page++;
                if(page > 1){
                    
                    $(".slide_1").removeClass('bg_wh');
                    $(".slide_2").addClass('bg_wh');
                }
            }
            else if(e.originalEvent.deltaY < 0) {
                
                if (page == 1) return;
                page --;
                if (page == 1) {
                    $(".slide_1").addClass('bg_wh');
                    $(".slide_2").removeClass('bg_wh');
                };
                if(page > 1){
                    $(".slide_1").removeClass('bg_wh');
                    $(".slide_2").addClass('bg_wh');
                    
                }
            } 
            console.log(page);
            var scrollTop = $(window).height() * (page - 1);
            $("html").stop().animate({ 
                "scrollTop": scrollTop,
                duration: 1000 
            });
        });

        $(window).scroll( function(){
            $('.fadeinleft').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','margin-left':'0px'},1000);
                    return false;
                }
            });
            $('.fadeintop').each( function(i){
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','margin-top':'0px'},1000);
                    return false;
                }
            });

        });
        
    });
})(jQuery);