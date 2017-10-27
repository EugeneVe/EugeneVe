'use strict';
export class MainController {
  constructor() {
    'ngInject';
  }
}

/*TIME DATE & WEATHER*/
$(document).ready(function($) {
  function update() {
    $('#hour').html(moment().format('H'));
    $('#min').html(moment().format('mm'));
    $('#sec').html(moment().format('ss'));
    $('#date').html(moment().format('DD.MM.YYYY'));
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "сьогодні Неділя";
    weekday[1] = "сьогодні Понеділок";
    weekday[2] = "сьогодні Вівторок";
    weekday[3] = "сьогодні Середа";
    weekday[4] = "сьогодні Четвер";
    weekday[5] = "сьогодні П'ятниця";
    weekday[6] = "сьогодні Субота";
    var n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = n;
    var data = [
        [22, 24, "Доброї ночі"],
        [0, 5, "Доброї ночі"],
        [5, 10, "Доброго ранку"],
        [10, 17, "Доброго дня"],
        [17, 22, "Доброго вечора"]
      ],
      hr = new Date().getHours();
    for (var i = 0; i < data.length; i++) {
      if (hr >= data[i][0] && hr <= data[i][1]) {
        $('#hello').html(data[i][2]);
        break;
      }
    }
  }
  setInterval(update, 1000);
});
/*BLUR CONTENT ON SCROLL & FADE IN*/
/*$(window).on('scroll', function() {
  var pixs = $(document).scrollTop();
  pixs = pixs / 10;
  $(".mainBlock, .aboutBlock, .portfolioBlock, .contactsBlock")
    .css({ "-webkit-filter": "blur(" + pixs + "px)", "filter": "blur(" + pixs + "px)" })

    .css('opacity', function() { return 1 - ($(window).scrollTop() / $(this).outerHeight() * 2); });
});*/