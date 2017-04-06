(function () {
  'use strict';

  $(document).on('ready',function(){
    if ( $('.messaging-page').length ) {
      $(".chat-container > .content").mCustomScrollbar({
        axis: 'y',
        theme:"minimal-dark",
        setTop: $(".chat-container > .content > .wrapper").height() + 'px',
        advanced:{
          autoUpdateTimeout: 0,
          scrollInertia: 100,
          updateOnImageLoad: true,
          updateOnContentResize: true
        }
      });
    }
  });

})();
