import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobExperiencesService {

  constructor(
    private http: HttpClient
  ) { }

  getJobs(){
    return this.http.get('assets/mocks/job-experiences-nieltorres.json');
  }
}
