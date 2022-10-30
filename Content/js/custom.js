$(function () {
    $('.parallax-img').parallax(); 
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('#ios-notice').removeClass('hidden');
        $('.parallax-container').height($(window).height() * 0.5 | 0);
    } else {
        $(window).resize(function () {
            var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
            $('.parallax-container').height(parallaxHeight);
        }).trigger('resize');
    }
});