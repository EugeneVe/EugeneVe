/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
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
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeFooter', FooterDirective)
  .directive('acmeLogo', LogoDirective)
  .directive('acmeAbout', AboutDirective)
  .directive('acmeContacts', ContactsDirective)
  .directive('acmePortfolio', PortfolioDirective);

