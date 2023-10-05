import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagePraxisComponent } from './page-praxis/page-praxis.component';
import { PageZeitenComponent } from './page-zeiten/page-zeiten.component';
import { PageAnfahrtComponent } from './page-anfahrt/page-anfahrt.component';
import { PageJobsComponent } from './page-jobs/page-jobs.component';
import { PageKontaktComponent } from './page-kontakt/page-kontakt.component';
import { PageLeistungenComponent } from './page-leistungen/page-leistungen.component';
import { PageTermineComponent } from './page-termine/page-termine.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PageDatenschutzComponent } from './page-datenschutz/page-datenschutz.component';
import { PageTeamComponent } from './page-team/page-team.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PageEmployeeComponent } from './page-employee/page-employee.component';
import { PageLocationComponent } from './page-location/page-location.component';

const routes: Routes = [
  {path: '', component: PagePraxisComponent},
  {path: 'zeiten', component: PageZeitenComponent },
  {path: 'anfahrt', component: PageAnfahrtComponent},
  {path: 'jobs', component: PageJobsComponent},
  {path: 'leistungen', component: PageLeistungenComponent},
  {path: 'kontakt', component: PageKontaktComponent},
  {path: 'termine', component: PageTermineComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: PageDatenschutzComponent},
  {path: 'team', component: PageTeamComponent},
  {path: 'ärzte', component: DoctorsComponent},
  {path: 'angestellte', component: PageEmployeeComponent},
  {path: 'standort', component: PageLocationComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
