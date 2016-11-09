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
      console.log("target :"+$target.offset().top);
      console.log("scroll :"+$window.scrollTop());
      console.log("height :"+$window.height())
      if (($window.scrollTop() + $window.height()) > $target.offset().top) {
        console.log("visible");
        $(this).removeClass('active');
      }else{
        console.log("hidden");
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

  //$("body").scrollspy({target: $element, offset: 0});

})();