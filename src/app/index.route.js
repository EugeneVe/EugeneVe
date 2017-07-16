export function routerConfig($routeProvider) {

  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'app/components/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .when('/portfolio', {
      templateUrl: 'app/components/portfolio/portfolio.html',
      controller: 'PortfolioController',
      controllerAs: 'portfolio'
    })
    .when('/contacts', {
      templateUrl: 'app/components/contacts/contacts.html',
      controller: 'contactsController',
      controllerAs: 'contacts'
    })
    .otherwise({
      redirectTo: '/'
    });
}
