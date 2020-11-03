$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('change-nav');
        $('.img-top').addClass('change-img');
        $('.logo-top div').addClass('change-pad');
        $('.large').addClass('change-large');
        $('.small').addClass('change-small');
        $('.list-item-top a').addClass('decr-pad');
        $('.sub-list-top').addClass('change-sub');
        $('.sub-list-top li a').addClass('change-sub-sub');


    } else {
        $('nav').removeClass('change-nav');
        $('.img-top').removeClass('change-img');
        $('.logo-top div').removeClass('change-pad');
        $('.large').removeClass('change-large');
        $('.small').removeClass('change-small');
        $('.list-item-top a').removeClass('decr-pad');
        $('.sub-list-top').removeClass('change-sub');
        $('.sub-list-top li a').removeClass('change-sub-sub');

    }
})
