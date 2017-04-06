(function () {
  'use strict';

  if ( $('.messaging-page').length ) {
    $('.message').on('click', function(e) {
      e.preventDefault();
      $('.chat-container').addClass('active');
      $('.message').removeClass('active')
      $(this).addClass('active')
    });
    $('.btn-back-to-messages').on('click', function(e) {
      e.preventDefault();
      $('.chat-container').removeClass('active');
    });
  }

})();