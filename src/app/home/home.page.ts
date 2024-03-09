import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  marginTopToChild: string = 'top100';
  isMenuOpen: boolean = false;
  hidden: string = "";


  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit() {

    this.menuService.menuOpen.subscribe(
      (isOpen: boolean) => {
        this.isMenuOpen = isOpen;
        if(isOpen){
          console.log('El menú está abierto');
          this.hidden = "hidden"
        }
        else {
          console.log('El menú está cerrado');
          this.hidden = ""

        }
      }
    )

  }

}
