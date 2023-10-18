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
import { PageVorsorgeComponent } from './page-vorsorge/page-vorsorge.component';
import { PageDiagnoseComponent } from './page-diagnose/page-diagnose.component';
import { PageBehandlungComponent } from './page-behandlung/page-behandlung.component';
import { PageImpfberatungComponent } from './page-impfberatung/page-impfberatung.component';

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
  {path: 'team/aerzte', component: DoctorsComponent},
  {path: 'team/angestellte', component: PageEmployeeComponent},
  {path: 'team/standort', component: PageLocationComponent},
  {path: 'leistungen/vorsorge', component: PageVorsorgeComponent},
  {path: 'leistungen/diagnose', component: PageDiagnoseComponent},
  {path: 'leistungen/behandlung', component: PageBehandlungComponent},
  {path: 'leistungen/impfberatung', component: PageImpfberatungComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled' } )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
