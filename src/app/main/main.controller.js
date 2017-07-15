'use strict';
export class MainController {
  constructor($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1495632958550;
    this.toastr = toastr;
    this.activate($timeout, webDevTec);
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}

$(window).on('scroll', function () {
  var pixs = $(document).scrollTop();
  pixs = pixs / 30;
  $(".mainBlock, .aboutBlock, .portfolioBlock, .contactsBlock")
    .css({"-webkit-filter": "blur(" + pixs + "px)", "filter": "blur(" + pixs + "px)"})
});

/*function clock() {
 var time = new Date(),
 hours = time.getHours(),
 minutes = time.getMinutes(),
 seconds = time.getSeconds();
 var ampm = hours >= 12 ? 'pm' : 'am';
 hours = hours % 12;
 hours = hours ? hours : 12;

 document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + " " + ampm;
 /!*+ ":" + harold(seconds)*!/

 function harold(standIn) {
 if (standIn < 10) {
 standIn = '0' + standIn
 }
 return standIn;
 }
 }
 setInterval(clock, 1000);*/


