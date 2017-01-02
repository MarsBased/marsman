(function () {
  'use strict';

  var $element = $('[data-toggle="popover"],.popover-icon');

  $element.each(function(){
    if($(this).data('popover')=='html'){
      $element.click(function(e){
        e.preventDefault();
      }).popover({
        html: true,
        container: 'body',
        placement: 'auto bottom',
        content: $(this).next().html(),
				template: '<div class="popover html"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'
			}).addClass('html');
    }else{
			$element.click(function(e){
        e.preventDefault();
      }).popover({
        container: 'body',
        placement: 'auto top'
			});
    }
  })

  $(document).on('click', function(e) {
	  $element.each(function() {
	    //the 'is' for buttons that trigger popups
	    //the 'has' for icons within a button that triggers a popup
	    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	      $(this).popover('hide').data('bs.popover').inState.click = false // fix for BS 3.3.6
	    }

	  });
	});


})();