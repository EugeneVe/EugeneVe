export function ErrorDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/email/email.html',
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
