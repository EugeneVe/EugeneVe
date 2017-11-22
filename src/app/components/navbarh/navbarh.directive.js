export function NavbarhDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbarh/navbarh.html',
    scope: {
        creationDate: '='
    },

    controller: NavbarhController,
    controllerAs: 'vm',
    bindToController: true

  };

  return directive;
}

class NavbarhController {
  constructor () {
    'ngInject';

  }
}
