import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { JobExperienceCompanyComponent } from './job-experience-company/job-experience-company.component';

@NgModule({
  declarations: [JobExperienceCompanyComponent],
  imports: [
    CommonModule, 
    IonicModule.forRoot()
  ],
  exports: [JobExperienceCompanyComponent]
})
export class JobsExperienceModule { }
