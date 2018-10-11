export function routerConfig($routeProvider, $locationProvider) {

  'ngInject';
  $routeProvider
    
  .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .when('/home', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: 'app/components/about/about.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .when('/portfolio', {
      templateUrl: 'app/components/portfolio/portfolio.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .when('/contacts', {
      templateUrl: 'app/components/contacts/contacts.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .when('/404', {
      templateUrl: 'app/components/404/404.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/404',
      controller: 'MainController',
      controllerAs: 'vm'
    });
    $locationProvider
    .html5Mode(true);
}
