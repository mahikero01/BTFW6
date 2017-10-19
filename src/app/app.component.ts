import { Component } from '@angular/core';

import { 
  FrameworkConfigSettings, 
  FrameworkConfigService 
} from '../btfw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService) {
    let config: FrameworkConfigSettings = {
      applicationTitle: 'Skillset Database',
      currentUserLog: 'sarmife'
    };

    frameworkConfigService.configure(config);
  }
}
