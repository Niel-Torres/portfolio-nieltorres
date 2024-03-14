import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-ubication',
  templateUrl: './contact-ubication.component.html',
  styleUrls: ['./contact-ubication.component.scss'],
})
export class ContactUbicationComponent  implements OnInit {
  email: string = 'niel.torres08@gmail.com';
  city: string = 'Madrid, España';

  constructor() { }

  ngOnInit() {}

}
