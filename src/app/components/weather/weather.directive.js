export function WeatherDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/weather/weather.html',
    scope: {
        creationDate: '='
    },

    controller: WeatherController,
    controllerAs: 'vm',
    bindToController: true

  };

  return directive;  
}

class WeatherController {
  constructor () {
    'ngInject';

  }
}