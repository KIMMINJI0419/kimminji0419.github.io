console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        var $highlighter = $('.highlighter');
        var $view_btn = $('.view_btn');
        $view_btn.on("mouseover", function () {
            $highlighter.addClass('hl');
        });
        $view_btn.on("mouseout", function () {
            $highlighter.removeClass('hl');
        });

        var $highlighter1 = $('.highlighter1');
        var $view_btn1 = $('.view_btn1');
        $view_btn1.on("mouseover", function () {
            $highlighter1.addClass('hl1');
        });
        $view_btn1.on("mouseout", function () {
            $highlighter1.removeClass('hl1');
        });
    });
})(jQuery);