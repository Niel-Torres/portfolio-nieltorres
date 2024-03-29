import { Component, OnInit} from '@angular/core';
import { JobExperiencesService } from 'src/app/services/jobExperiences/job-experiences.service';


interface Elemento {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-job-experience-company',
  templateUrl: './job-experience-company.component.html',
  styleUrls: ['./job-experience-company.component.scss'],
})
export class JobExperienceCompanyComponent  implements OnInit {

  jobsExperiences: any;
  elementsJobsExperienceDetailVisible = new Map<number, boolean>();
  elementsIconsVisible = new Map<number, boolean>();

  //TODO: Implementarlo con el API 
  dateWorkStart: Date = new Date('2023-05-01');  
  dateCurrent: Date = new Date(); 
  monthsWorked: number = 0;

  constructor(
    private jobExperiencesService: JobExperiencesService
  ) { }

  ngOnInit() {
    this.getJobsExperiences();
    this.getMonthsWorked();
  }

  getMonthsWorked(){
    let countMonths = 0;
    const difMeses = (this.dateCurrent.getFullYear() - this.dateWorkStart.getFullYear()) * 12;
    countMonths = this.dateCurrent.getMonth() - this.dateWorkStart.getMonth() + difMeses;
    this.monthsWorked = countMonths+1;
  }

  getJobsExperiences(){
    this.jobExperiencesService.getJobs()
      .subscribe(
        data => {
          this.jobsExperiences = data;
          //console.log(this.jobsExperiences);
        }
      )
  }

  toggleDetalle(id: number) {
    this.elementsJobsExperienceDetailVisible.set(id, !this.elementsJobsExperienceDetailVisible.get(id));
    this.elementsIconsVisible.set(id, !this.elementsIconsVisible.get(id));

  }

  isVisible(id: number): boolean {
    return this.elementsJobsExperienceDetailVisible.get(id) || false;
  }

  getIconName(id: number){ 
    let iconName = 'chevron-down-circle-outline';
    if(this.elementsIconsVisible.get(id)){
      iconName = 'chevron-up-circle-outline';

    }
    return iconName; 
  }

}
