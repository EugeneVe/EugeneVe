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

  var data = [
      [0, 12, "Доброго ранку Eugene"],
      [12, 18, "Доброго дня Eugene"],
      [18, 24, "Доброго вечора Eugene"]
    ],
    hr = new Date().getHours();

  for(var i=0; i<data.length;i++){
    if(hr >= data[i][0] && hr <= data[i][1]){
      $('#hello').html(data[i][2]);
      break;
    }
  }
}
setInterval(update, 500);
