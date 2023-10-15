import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AlertModule } from '@coreui/angular';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagePraxisComponent } from './page-praxis/page-praxis.component';
import { PageZeitenComponent } from './page-zeiten/page-zeiten.component';
import { MaterialDesignModule } from './material-design.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WarningBoxComponent } from './warning-box/warning-box.component';
import { SwappingPicComponent } from './swapping-pic/swapping-pic.component';
import { SplitPicComponent } from './split-pic/split-pic.component';
import { PictureBoxesComponent } from './picture-boxes/picture-boxes.component';
import { PictureSwitchComponent } from './picture-switch/picture-switch.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PageLeistungenComponent } from './page-leistungen/page-leistungen.component';
import { PageKontaktComponent } from './page-kontakt/page-kontakt.component';
import { PageAnfahrtComponent } from './page-anfahrt/page-anfahrt.component';
import { PageTermineComponent } from './page-termine/page-termine.component';
import { PageJobsComponent } from './page-jobs/page-jobs.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { RecaptchaModule } from 'ng-recaptcha';
import { ImpressumComponent } from './impressum/impressum.component';
import { PageDatenschutzComponent } from './page-datenschutz/page-datenschutz.component';
import { PageTeamComponent } from './page-team/page-team.component';
import { HttpClientModule } from "@angular/common/http";
import { DoctorsComponent } from './doctors/doctors.component';
import { PageEmployeeComponent } from './page-employee/page-employee.component';
import { PageLocationComponent } from './page-location/page-location.component';


@NgModule({
  declarations: [
    AppComponent,
    PagePraxisComponent,
    PageZeitenComponent,
    ToolbarComponent,
    WarningBoxComponent,
    SwappingPicComponent,
    SplitPicComponent,
    PictureBoxesComponent,
    PictureSwitchComponent,
    PageLeistungenComponent,
    PageKontaktComponent,
    PageAnfahrtComponent,
    PageTermineComponent,
    PageJobsComponent,
    FooterComponent,
    ContactFormComponent,
    ImpressumComponent,
    PageDatenschutzComponent,
    PageTeamComponent,
    DoctorsComponent,
    PageEmployeeComponent,
    PageLocationComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RecaptchaModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
