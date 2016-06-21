import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { HenriPotierService } from '../app/components/henriPotier/henriPotier.service';
import { LocalService } from '../app/components/localStorage/localStorage.service';
import { MainController } from './main/main.controller';
import { BasketController } from './basket/basket.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { HenriPotierDirective } from '../app/components/henriPotier/henriPotier.directive';

angular.module('xebiaTest', ['ngSanitize', 'ui.router', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('HenriPotierService', HenriPotierService)
  .service('LocalService', LocalService)
  .controller('MainController', MainController)
  .controller('BasketController', BasketController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('henriPotier', HenriPotierDirective);