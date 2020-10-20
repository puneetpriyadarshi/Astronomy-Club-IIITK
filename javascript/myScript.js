$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black-nav');
        $('.list-item a').addClass('black-item');
        $('.logo .large').addClass('black-large');
        $('.logo .small').addClass('black-small');
    } else {
        $('nav').removeClass('black-nav');
        $('.list-item a').removeClass('black-item');
        $('.logo .large').removeClass('black-large');
        $('.logo .small').removeClass('black-small');
    }
})