import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  goToLink(link: string, target: string){
    window.open(link, target);
  }
}
