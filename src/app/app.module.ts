import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { JobsExperienceModule } from './components/jobs-experience/jobs-experience.module';
import { BlogPageModule } from './pages/blog/blog.module';
import { HomePageModule } from './home/home.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JobExperiencesComponent } from './components/jobs-experience/jobs-experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactUbicationComponent } from './components/contact-ubication/contact-ubication.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    ProfileComponent, 
    JobExperiencesComponent, 
    ProjectsComponent, 
    ContactUbicationComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    JobsExperienceModule,
    BlogPageModule,
    HomePageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
