import { Routes } from '@angular/router';

import { ShowresultComponent } from './search/showresult/showresult.component';
import { ExportpdfComponent } from './search/export/exportpdf/exportpdf.component';
import { ExportexcelComponent } from './search/export/exportexcel/exportexcel.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { LocationComponent } from './maintenance/location/location.component';
import { DepartmentComponent } from './maintenance/department/department.component';
import { SkillsetmComponent } from './maintenance/skillsetm/skillsetm.component';

export const appRoutes: Routes = [
    { path: 'show-search', component: ShowresultComponent },
    { path: 'pdf-export', component: ExportpdfComponent },
    { path: 'excel-export', component: ExportexcelComponent },
    { path: 'skillset', component: SkillsetComponent },
    { path: 'location-maint', component: LocationComponent},
    { path: 'department-maint', component: DepartmentComponent},
    { path: 'skill-maint', component: SkillsetmComponent},
    { path: '', component: SkillsetComponent },
    { path: '**', component: SkillsetComponent }
];