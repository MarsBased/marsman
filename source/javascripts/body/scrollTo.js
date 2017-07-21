(function () {
  'use strict';

  var $scrollers = $('html,body,.wrapper');

  function scrollTo($e){
    var header_position = $('header.header').css('position');

    if(header_position == 'fixed'){
      $scrollers.animate({
          scrollTop: $e.offset().top - $('.wrapper').offset().top},
          'slow');
    }else{
      $scrollers.animate({
          scrollTop: $e.offset().top},
          'slow');
    }
  }

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        scrollTo(target)
        return false;
      }
    }
  });

})();
