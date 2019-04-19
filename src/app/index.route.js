export function routerConfig($routeProvider, $locationProvider) {

  'ngInject';
  $routeProvider
    
  .when('/', {
      templateUrl: 'app/main/main.html',
      controllerAs: 'vm'
    })
    .when('/home', {
      templateUrl: 'app/main/main.html',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: 'app/components/about/about.html',
      controllerAs: 'vm'
    })
    .when('/my_products', {
      templateUrl: 'app/components/portfolio/portfolio.html',
      controllerAs: 'vm'
    })
    .when('/contacts', {
      templateUrl: 'app/components/contacts/contacts.html',
      controllerAs: 'vm'
    })
    .when('/404', {
      templateUrl: 'app/components/404/404.html',
      controllerAs: 'vm'
    })
    .when('/email_sent', {
      templateUrl: 'app/components/email/email.html',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/404',
      controllerAs: 'vm'
    });
    $locationProvider
    .html5Mode(true);
}
