export function AboutDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/about/about.html',
        controller: AboutController,
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}


class AboutController {
  constructor() {
        'ngInject';
    }
}

