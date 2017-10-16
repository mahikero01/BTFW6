import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

export const appRoutes: Routes = [ 
    { path: '', component: AuthenticatedUserComponent },
    { path: '**', component: AuthenticatedUserComponent }
];