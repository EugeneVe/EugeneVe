export function LogoDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/logo/logo.html',
        controller: LogoController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}
class LogoController {
    constructor() {
        'ngInject';
    }
}
