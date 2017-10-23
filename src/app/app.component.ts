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
        route: null,
        submenu: [
          {
            text: 'Show Result',
            icon: 'fa-cogs',
            route: 'show-search',
            submenu: null
          },
          {
            text: 'Export Result',
            icon: 'fa-cogs',
            route: null,
            submenu: [
              {
                text: 'In PDF',
                icon: 'fa-cogs',
                route: 'pdf-export',
                submenu: null
              },
              {
                text: 'In Excel',
                icon: 'fa-cogs',
                route: 'excel-export',
                submenu: null
              }
            ]
          }
        ]
      },
      {
        text: 'Skillset',
        icon: 'fa-cogs',
        route: 'skillset',
        submenu: null
      },
      {
        text: 'Maintenance',
        icon: 'fa-wrench',
        route: null,
        submenu: [
          {
            text: 'Location List',
            icon: 'fa-cogs',
            route: 'location-maint',
            submenu: null
          },
          {
            text: 'Department List',
            icon: 'fa-cogs',
            route: 'department-maint',
            submenu: null
          },
          {
            text: 'Skill List',
            icon: 'fa-cogs',
            route: 'skill-maint',
            submenu: null
          }
        ]
      }
    ];

    menuService.items = initialMenuItem;
  }
}
