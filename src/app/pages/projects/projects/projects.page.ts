import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  isMenuOpen: boolean = false;
  hidden: string = "";

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {

    this.menuService.menuOpen.subscribe(
      (isOpen: boolean) => {
        this.isMenuOpen = isOpen;
        if(isOpen){
          //console.log('El menú está abierto');
          this.hidden = "hidden"
        }
        else {
          //console.log('El menú está cerrado');
          this.hidden = ""

        }
      }
    )

  }

}
