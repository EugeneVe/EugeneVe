export function FooterDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/footer/footer.html',
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}
class FooterController {
  constructor() {
    'ngInject';
  }
}
