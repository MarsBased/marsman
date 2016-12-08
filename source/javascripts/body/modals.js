(function () {
  'use strict';

  var $modals = $('.modal');

  if($modals.length){
	  $modals.each(function(){
	  	$(this).insertAfter('.footer');
	  });
  }

  var $target = $('#'+$_GET('modal'));

  if($target.length){
  	$target.modal('show');
  }

})();
