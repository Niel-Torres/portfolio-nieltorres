import { ParseTreeResult } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent  implements OnInit {
  mostrar: boolean = false;
  showHybridProjects: boolean = true;
  showWebProjects: boolean = true;
  showAndroidProjects: boolean = true;
  showiOSProjects: boolean = true;
  selectedPlatform: string = 'All';
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

  showProjects(platform: string) {
    // if(platform=='Android'){
    //   this.mostrarCardFilter = false;
    // }

    this.selectedPlatform = platform;

    switch(platform) {
      case 'Android': 
        console.log('Android');
        this.showWebProjects = false;
        this.showHybridProjects = true;
        this.showAndroidProjects = true;
        this.showiOSProjects = false;
        break;
      case 'iOS': 
        console.log('iOS');
        this.showWebProjects = false;
        this.showHybridProjects = true;
        this.showAndroidProjects = false;
        this.showiOSProjects = true;
        break;
      case 'Web':
        console.log('Web');
        this.showWebProjects = true;
        this.showHybridProjects = true;
        this.showAndroidProjects = false;
        this.showiOSProjects = false;
        break;
      default:
        console.log('All');
        this.showWebProjects = true;
        this.showHybridProjects = true;
        this.showAndroidProjects = true;
        this.showiOSProjects = true;
        break;    
    }
    
  }

}
