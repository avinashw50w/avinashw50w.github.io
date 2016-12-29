$(document).ready(function() {

    setTimeout(function() {

        $(document).on('scroll', function (e) {
            $('.navbar').css('opacity', ($(document).scrollTop() / 400));
        });

        $(".se-pre-con").fadeOut("slow");

    },2000);

});
