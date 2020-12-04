console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        var imgs;
        var img_c;
        var img_p = 1;

        imgs = $(".container");
        img_c = imgs.children().length;

        $('.prev').click(function () {
            back();
        });
        $('.next').click(function () {
            next();
        });

        function back() {
        if(1 < img_p){
            imgs.animate({
                left:'+=1000px'
            });
            img_p--;
            }
        }
        function next() {
        if(img_c > img_p){
          imgs.animate({
            left:'-=1000px'
          });
          img_p++;
          console.log(img_p);
        }
      }
    });
})(jQuery);