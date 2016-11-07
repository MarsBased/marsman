(function () {
  'use strict';

  var $s2 = $('.select2');

  $s2.each(function(){
  	var params = {},
        css;

  	if (!$(this).hasClass('search')){
    	_.extend(params, {minimumResultsForSearch: Infinity});
    }
    if ($(this).hasClass('success')){
    	//_.extend(params, {containerCss: ".success"});
      css= 'success';
    }
    if ($(this).hasClass('warning')){
    	//_.extend(params, {containerCss: ".warning"});
      css = 'warning';
    }

    $(this)
      .select2(params)
      .next('.select2-container')
        .addClass(css);

    $(this).on("select2-open", function() {
      $(this).select2('positionDropdown', true);
    });

  })

})();