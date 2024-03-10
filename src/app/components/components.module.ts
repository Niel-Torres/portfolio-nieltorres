import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { JobsExperienceModule } from '../components/jobs-experience/jobs-experience.module';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { JobExperiencesComponent } from '../components/jobs-experience/jobs-experience.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactUbicationComponent } from '../components/contact-ubication/contact-ubication.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    ProfileComponent,
    JobExperiencesComponent,
    ProjectsComponent,
    ContactUbicationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    JobsExperienceModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    ProfileComponent,
    JobExperiencesComponent,
    ProjectsComponent,
    ContactUbicationComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
