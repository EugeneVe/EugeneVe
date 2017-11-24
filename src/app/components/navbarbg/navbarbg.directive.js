export function NavbarbgDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbarbg/navbarbg.html',
    scope: {
        creationDate: '='
    },

    controller: NavbarBGController,
    controllerAs: 'vm',
    bindToController: true

  };

  return directive;
}

class NavbarBGController {
  constructor () {
    'ngInject';

  }
}
