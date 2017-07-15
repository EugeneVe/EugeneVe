export function PortfolioDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/portfolio/portfolio.html',
        controller: PortfolioController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}
class PortfolioController {
    constructor() {
        'ngInject';
    }
}
