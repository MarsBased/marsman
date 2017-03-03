(function () {
  'use strict';

  var $button = $('.btn-collapse');

  $button.on('click',function(){
    $(this).toggleClass('active');
    $('body').toggleClass('open-menu');
  });

})();