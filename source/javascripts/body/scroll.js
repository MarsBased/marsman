(function () {
  'use strict';

  var $element = $('[data-scroll]'),
      $scrollers = $('html,body,.wrapper');

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

  function scrollVisible($window) {
    $element.each(function(){
      var $target = $($(this).data("scroll"));
      if (($window.scrollTop() + window.innerHeight) > $target.offset().top) {
        $(this).removeClass('active');
      }else{
        $(this).addClass('active');
      }
    })
  }

  if($element.length) {
    $element.click(function(e) {
      e.preventDefault();
      scrollTo($($(this).data("scroll")));
    });

    $scrollers.scroll(function(){
      scrollVisible($(this))
    });

    $(window).scroll(function(){
      scrollVisible($(this));
    })

    scrollVisible($(window))
  }

})();
