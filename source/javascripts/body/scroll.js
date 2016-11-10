(function () {
  'use strict';

  var $element = $('[data-scroll]');

  function scrollTo($e){
    $('html,body').animate({
        scrollTop: $e.offset().top},
        'slow');
  }

  function scrollVisible($window) {
    $element.each(function(){
      var $target = $($(this).data("scroll"));
      if (($window.scrollTop() + $window.height()) > $target.offset().top) {
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

    $(window).scroll(function(){
      scrollVisible($(this))
    });

    scrollVisible($(window))
  }

})();