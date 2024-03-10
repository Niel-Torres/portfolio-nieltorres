import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
UtilsService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private menuService: MenuService,
    private utilService: UtilsService
  ) { }

  ngOnInit() { }


  menuWillOpen() {
    console.log('El menú está a punto de abrirse');
    this.menuService.emitMenuOpen(true);
    // Coloca aquí el código que deseas ejecutar cuando el menú está a punto de abrirse
  }

  menuWillClose() {
    console.log('El menú está a punto de cerrarse');
    this.menuService.emitMenuOpen(false);
    // Coloca aquí el código que deseas ejecutar cuando el menú está a punto de cerrarse
  }

  goToLink() {
    const URL = "https://drive.google.com/file/d/1nE0WyFfk9f4yfmvDsPvRtVI7xCNwnUcu/view?usp=sharing";
    this.utilService.goToLink(URL, "_blank");
  }

  goToBlog() {
    const URL = "https://medium.com/@nieltorres_/list/mi-blog-e6f2e63bdc98";
    this.utilService.goToLink(URL, "_blank");
  }

}
