(function () {
  'use strict';

  var $input = $('[maxlength]'),
  		spanClass = 'character-counter';

  function chractersCounter($element) {
    var left = $element.attr('maxlength') - $element.val().length;

	  if (left < 0) {
	  	left = 0;
	  }

	  $element
	  	.attr('data-characters-counter', left)
	  	.next('.'+spanClass)
	  		.attr('class', statusCounter(left)+' '+spanClass)
	  			.text(signCounter(left));
  }

  function statusCounter(num){
  	if(num >= 20){
			return 'success';
		}else{
			return "warning";
		}
  }

  function signCounter(num){
  	if(num <= 0){
  		return num;
  	}
  	return '-'+num;
  }

  function createCounter($element){
  	$element.after( '<span class="'+spanClass+'"></span>' );
  }

  function positionCounter($element){
  	var $counter = $element.next('.'+spanClass),
  			position = $element.position(),
  			width = $element.outerWidth(),
  			height = $element.outerHeight(),
  			zindex = ($element.css("z-index")) ? "inherit" : $element.css("z-index")+1;

  	$counter
  		.css('top', position.top + height)
  		.css('left',position.left + width)
  		.css('z-index', zindex);
  }

  function init(){
  	createCounter($input);
  	positionCounter($input);
  	chractersCounter($input);
  }

  init();

  $input
  	.keyup(function () {
	  	chractersCounter($(this));
		})
		.change(function (){
			chractersCounter($(this));
		});

	$(window).resize(function(){
    positionCounter($input);
	});

})();