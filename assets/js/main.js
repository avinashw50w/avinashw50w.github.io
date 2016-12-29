$(document).ready(function() {

    setTimeout(function() {
        $('.jumbotron').css("background", "url('assets/img/back3.jpg')");

        $(document).on('scroll', function (e) {
            $('.navbar').css('opacity', ($(document).scrollTop() / 400));
        });

        $(".se-pre-con").fadeOut("slow");
        
    },2000);

});
