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

/*BLUR CONTENT ON SCROLL*/
$(window).on('scroll', function () {
  var pixs = $(document).scrollTop();
  pixs = pixs / 30;
  $(".mainBlock, .aboutBlock, .portfolioBlock, .contactsBlock")
    .css({"-webkit-filter": "blur(" + pixs + "px)", "filter": "blur(" + pixs + "px)"})
});

/*TIME & DATE*/
function update() {
  $('#clock').html(moment().format('H:mm'));
  $('#sec').html(moment().format(':ss'));
  $('#date').html(moment().format('DD.MM.YYYY'));

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Неділя";
  weekday[1] = "Понеділок";
  weekday[2] = "Вівторок";
  weekday[3] = "Середа";
  weekday[4] = "Четвер";
  weekday[5] = "П'ятниця";
  weekday[6] = "Субота";

  var n = weekday[d.getDay()];
  document.getElementById("day").innerHTML = n;
}
setInterval(update, 500);

