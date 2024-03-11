import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

const linksMenu = [
  {
    name: 'Inicio',
    link: '/portfolio',
    icon: 'home-outline',
    url: ''
  },
  {
    name: 'Proyectos',
    link: '/proyectos',
    icon: 'code-slash-outline',
    url: ''
  },
  {
    name: 'Sobre mí',
    link: '/sobre-mi',
    icon: 'id-card-outline',
    url: ''
  },
  {
    name: 'Blog',
    link: '',
    icon: 'book-outline',
    url: 'https://medium.com/@nieltorres_/list/mi-blog-e6f2e63bdc98'
  },
  {
    name: 'Mi CV',
    link: '',
    icon: 'newspaper-outline',
    url: 'https://drive.google.com/file/d/1gHlFJLNi30adF28GPxE9aaJeaMx1TQiu/view?usp=sharing'
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  linksMenu = linksMenu;


  constructor(
    private menuService: MenuService,
    private utilService: UtilsService
  ) { 
  }

  ngOnInit() { }


  menuWillOpen() {
    //console.log('El menú está a punto de abrirse');
    this.menuService.emitMenuOpen(true);
    // Coloca aquí el código que deseas ejecutar cuando el menú está a punto de abrirse
  }

  menuWillClose() {
    //console.log('El menú está a punto de cerrarse');
    this.menuService.emitMenuOpen(false);
    // Coloca aquí el código que deseas ejecutar cuando el menú está a punto de cerrarse
  }

  goToLink(url: string) {
    this.utilService.goToLink(url, "_blank");
  }

}
