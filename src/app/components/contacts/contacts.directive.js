export function ContactsDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/contacts/contacts.html',
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
