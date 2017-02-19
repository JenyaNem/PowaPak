var countImages = $('#main_animation-hide img').size();

$('#main_animation-hide').imagesLoaded()
.always( function( instance ) {
  $('#progress-bar').fadeOut(function() {
    $('#main_animation-hide').fadeIn();
  });
})
.progress( function( instance, image ) {
  if(image.isLoaded) {
    $(image.img).addClass('loaded');

    var countLoadedImages = $('#main_animation-hide img.loaded').size();

    var width = new Number(100 * (countLoadedImages / countImages));
    width = width.toFixed(2) + '%';

    // $('#progress-bar > #progress').css({
    //   'width' : width
    // });

    $('#progress-bar > p').html(width);
  }
});

$(function() {



});
