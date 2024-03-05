import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent  implements OnInit {
  mostrar: boolean = false;
  @Input() marginTop!: string;

  constructor() {
   }

  ngOnInit() {}

  mostrarTexto() {
    this.mostrar = true;
  }

  ocultarTexto() {
    this.mostrar = false;
  }

}
