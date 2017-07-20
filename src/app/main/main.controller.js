'use strict';
export class MainController {
  constructor() {
    'ngInject';
  }
}
/*TIME DATE & WEATHER*/
$(document).ready(function($) {
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
  setInterval(update, 500);
  function weather() {
    $.ajax({
      url: "http://api.wunderground.com/api/e1550cbb9034cf8a/geolookup/conditions/q/UA/Kharkiv.json",
      dataType: "jsonp",
      success: function(parsed_json) {
        /*var weather = parsed_json['location']['city'];*/
        var temp = parsed_json['current_observation']['temp_c'];
        /*document.getElementById("weather").innerHTML = weather;*/
        document.getElementById("temp").innerHTML = temp;
      }
    });
  }
  setInterval(weather, 1000);
});
/*BLUR CONTENT ON SCROLL & FADE IN*/
$(window).on('scroll', function() {
  var pixs = $(document).scrollTop();
  pixs = pixs / 10;
  $(".mainBlock, .aboutBlock, .portfolioBlock, .contactsBlock")
    /*.css({ "-webkit-filter": "blur(" + pixs + "px)", "filter": "blur(" + pixs + "px)" })*/
    .css('opacity', function() {return 1 - ($(window).scrollTop() / $(this).outerHeight() * 2);});
});

/*CITATES*/
window.onload = function() {
  var r_text = new Array([]);
  r_text[0] = "Пытайся делать всё, что кажется невозможным. Жизнь слишком коротка, можешь потом пожалеть.";
  r_text[1] = "Если мы не будем строить свое будущее, нам придется его терпеть";
  r_text[2] = "Успех – это когда ты девять раз упал, но десять раз поднялся.";
  r_text[3] = "Лучший способ предсказать своё будущее – стать его создателем.";
  r_text[4] = "Каждый день надо делать дело, которое тебя пугает.";
  r_text[5] = "Чтобы победить самые тяжелые страдания, есть два средства: это опиум - и работа.";
  r_text[6] = "Работа избавляет нас от трех великих зол: скуки, порока, нужды.";
  var i = Math.round(6 * Math.random());
  document.getElementById('citat').innerHTML = (r_text[i]);
};
