'use strict';
export class MainController {
  constructor() {
    'ngInject';
  }
}
/*BLUR CONTENT ON SCROLL & FADE IN*/
/*$(window).on('scroll', function() {
  var pixs = $(document).scrollTop();
  pixs = pixs / 10;
  $(".mainBlock, .aboutBlock, .portfolioBlock, .contactsBlock")
    .css({ "-webkit-filter": "blur(" + pixs + "px)", "filter": "blur(" + pixs + "px)" })

    .css('opacity', function() { return 1 - ($(window).scrollTop() / $(this).outerHeight() * 2); });
});*/
