import { Routes } from '@angular/router';

import { MaintenanceComponent } from './maintenance/maintenance.component';
import { SearchComponent } from './search/search.component';
import { SkillsetComponent } from './skillset/skillset.component';

export const appRoutes: Routes = [
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'search', component: SearchComponent },
    { path: 'skillset', component: SkillsetComponent },
    { path: '', component: SkillsetComponent },
    { path: '**', component: SkillsetComponent }
];