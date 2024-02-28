import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-experiences',
  templateUrl: './job-experiences.component.html',
  styleUrls: ['./job-experiences.component.scss'],
})
export class JobExperiencesComponent  implements OnInit {

  showDetailJobExperience: boolean = false;
  iconName: string = 'chevron-down-circle-outline';

  constructor() {


   }

  ngOnInit() {}
  
  showJobExperience() {
    this.showDetailJobExperience = !this.showDetailJobExperience;
    this.iconName = (this.iconName === 'chevron-down-circle-outline') ? 'chevron-up-circle-outline' : 'chevron-down-circle-outline';
  }

}
