$(document).ready(function() {

    $(".se-pre-con").fadeOut("slow");

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
        var windowOffset = $(window).height();
        var navOffset = $("#my-navbar").height();

        $('.navbar').css('opacity', ($(document).scrollTop() / (windowOffset - navOffset)));
    });

});
