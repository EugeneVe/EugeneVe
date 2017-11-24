/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarbgDirective } from '../app/components/navbarbg/navbarbg.directive';
import { NavbarhDirective } from '../app/components/navbarh/navbarh.directive';
import { NavbarvDirective } from '../app/components/navbarv/navbarv.directive';
import { WeatherDirective } from '../app/components/weather/weather.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { LogoDirective } from '../app/components/logo/logo.directive';
import { AboutDirective } from '../app/components/about/about.directive';
import { ContactsDirective } from '../app/components/contacts/contacts.directive';
import { PortfolioDirective } from '../app/components/portfolio/portfolio.directive';

angular.module('EugeneVe', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr','ds.clock'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('acmeNavbarbg', NavbarbgDirective)
  .directive('acmeNavbarh', NavbarhDirective)
  .directive('acmeNavbarv', NavbarvDirective)
  .directive('acmeWeather', WeatherDirective)
  .directive('acmeFooter', FooterDirective)
  .directive('acmeLogo', LogoDirective)
  .directive('acmeAbout', AboutDirective)
  .directive('acmeContacts', ContactsDirective)
  .directive('acmePortfolio', PortfolioDirective);

