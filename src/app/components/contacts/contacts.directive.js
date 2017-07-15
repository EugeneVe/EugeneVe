export function ContactsDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/contacts/contacts.html',
        controller: ContactsController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class ContactsController {
    constructor() {
        'ngInject';
    }
}
