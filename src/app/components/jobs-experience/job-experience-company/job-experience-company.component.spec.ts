import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobExperienceCompanyComponent } from './job-experience-company.component';

describe('JobExperienceCompanyComponent', () => {
  let component: JobExperienceCompanyComponent;
  let fixture: ComponentFixture<JobExperienceCompanyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobExperienceCompanyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobExperienceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
