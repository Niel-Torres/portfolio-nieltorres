import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {
  isMenuOpen: boolean = false;
  hidden: string = "";
  companyCurrent: string = "NTTDATA"
  bornDate: Date = new Date('1988-05-25');
  currentDate: Date = new Date();
  myCurrentAge: number = 35;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.updateCurrentAge();

    this.menuService.menuOpen.subscribe(
      (isOpen: boolean) => {
        this.isMenuOpen = isOpen;
        if (isOpen) {
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

  updateCurrentAge() {
    const diffCurrentDateBornDate = this.currentDate.getTime() - this.bornDate.getTime();
    this.myCurrentAge = new Date(diffCurrentDateBornDate).getFullYear() - 1970;
  }
}
