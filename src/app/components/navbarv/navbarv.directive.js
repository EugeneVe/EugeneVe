export function NavbarvDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbarv/navbarv.html',
    scope: {
        creationDate: '='
    },

    controller: NavbarvController,
    controllerAs: 'vm',
    bindToController: true

  };

  return directive;
}

class NavbarvController {
  constructor () {
    'ngInject';
  }
}
