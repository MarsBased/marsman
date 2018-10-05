import tippy from 'tippy.js';

$(document).ready(function() {
  tippy('.tooltip-wrapper-mobile .tooltip-trigger', {
    arrow: true,
    arrowType: 'skinny'
  });
  tippy('.tooltip-wrapper .tooltip-trigger', {
    arrow: true,
    arrowType: 'skinny',
    placement: 'right'
  });
});
