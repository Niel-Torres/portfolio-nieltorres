import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { JobsExperienceModule } from '../components/jobs-experience/jobs-experience.module';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    JobsExperienceModule,
    ComponentsModule
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}
