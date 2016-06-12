$(document).ready(function() {

  // Slider
  $('.sslick').slick({
    dots: true,
    arrows: false,
    speed: 1000
  });

  // Set background
  SetBannerBackground();

});

function SetBannerBackground() {

  $('[data-bg]').each(function (i) {
    var url_background = $(this).data("bg");
    // $(this).css('background', '#FFFFFF url(' + url_background + ') no-repeat right');
    $(this).backstretch(url_background);
  });

}