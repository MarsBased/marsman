(function () {
  'use strict';

  if ( $('.messaging-page').length ) {
    $('#message-search').keyup(function(){
      var search = $(this).val().toLowerCase();
      var $elements = $('.message')

      if(search){
        $elements.each(function(){
          var text = $(this).text().toLowerCase();
          (text.indexOf(search) >= 0) ? $(this).show() : $(this).hide();
        });
      }else{
        $elements.show();
      }
    });
  }

})();