import { Component } from '@angular/core';

import { 
  FrameworkConfigSettings, 
  FrameworkConfigService 
} from '../btfw/services/framework-config.service';

import { 
  MenuItem, 
  MenuService 
} from '../btfw/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService,
      private menuService: MenuService) {
    let config: FrameworkConfigSettings = {
      applicationTitle: 'Skillset Database',
      currentUserLog: 'sarmife'
    };

    frameworkConfigService.configure(config);

    let initialMenuItem: Array<MenuItem> = [
      {
        text: 'Search',
        icon: 'fa-search',
        route: '/search',
        submenu: null
      },
      {
        text: 'Skillset',
        icon: 'fa-cogs',
        route: '/skillset',
        submenu: null
      },
      {
        text: 'Maintenance',
        icon: 'fa-wrench',
        route: '/maintenance',
        submenu: null
      }
    ];

    menuService.items = initialMenuItem;
  }
}
