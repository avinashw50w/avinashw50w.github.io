$(document).ready(function() {

    setTimeout(function() {

        $("#top").on('click', function(e) {
            $('html,body').animate({scrollTop:0},'slow');
        });

        $("nav ul li a[href^='#']").on('click', function(e) {

            var target = this.hash;

            e.preventDefault();
            var navoffset = $("#my-navbar").height();

            $('html, body').animate({
                scrollTop: $(target).offset().top - navoffset
            }, 'slow', function() {
                return window.history.pushState(null, null, target);
            });
        });

        $(document).on('scroll', function (e) {
            $('.navbar').css('opacity', ($(document).scrollTop() / 400));
        });

        $(".se-pre-con").fadeOut("slow");

    },2000);

});
