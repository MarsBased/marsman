(function () {
  'use strict';

  $(document).ready(function(){
    if (!Cookies.get('mb_cookies_accepted')){
      $('body').addClass('cookies-show');
    }

    $('#acceptCookies').click(function(){
      Cookies.set('mb_cookies_accepted', 'true', { expires: 365 });
      $('body').removeClass('cookies-show');
    })
  });

})();
