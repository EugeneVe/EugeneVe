export function ErrorDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/404/404.html',
    controller: MainController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
}

class MainController {
  constructor() {
    'ngInject';

  }
}
