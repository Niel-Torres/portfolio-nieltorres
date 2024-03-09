import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {}


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

}
