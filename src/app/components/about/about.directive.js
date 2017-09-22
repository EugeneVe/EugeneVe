export function AboutDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/about/about.html',
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

