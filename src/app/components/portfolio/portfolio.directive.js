export function PortfolioDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/portfolio/portfolio.html',
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