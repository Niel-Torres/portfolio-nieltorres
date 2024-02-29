import { Component, OnInit, Input } from '@angular/core';
import { JobExperiencesService } from 'src/app/services/jobExperiences/job-experiences.service';

@Component({
  selector: 'app-job-experience-company',
  templateUrl: './job-experience-company.component.html',
  styleUrls: ['./job-experience-company.component.scss'],
})
export class JobExperienceCompanyComponent  implements OnInit {

  showDetailJobExperience: boolean = false;
  iconName: string = 'chevron-down-circle-outline';
  jobsExperiences: any;

  constructor(
    private jobExperiencesService: JobExperiencesService
  ) { 
   
  }

  ngOnInit() {
    this.getJobsExperiences()
  }

  showJobExperience() {
    this.showDetailJobExperience = !this.showDetailJobExperience;
    this.iconName = (this.iconName === 'chevron-down-circle-outline') ? 'chevron-up-circle-outline' : 'chevron-down-circle-outline';
  }

  getJobsExperiences(){
    this.jobExperiencesService.getJobs()
      .subscribe(
        data => {
          this.jobsExperiences = data;
          console.log(this.jobsExperiences);
        }
      )
  }

}
