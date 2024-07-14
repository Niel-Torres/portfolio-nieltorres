const article = [
  {
    title: 'Pasos para montar SonarQube en local para iOS',
    description: 'Pasos para instalar y configurar sonarqube en local para un proyecto en iOS...',
    datePublication: 'Jul 07, 2022',
    label1: 'iOS',
    label2: 'SonarQube',
    urlImage: 'sonarqube.jpg',
    urlBlog: 'https://medium.com/@nieltorres_/sonarqube-para-ios-4b9abb56e3ea',
    autor: 'Niel Torres',
    autorPosition: 'Co-Founder / CTO'
  },
  {
    title: 'Migrar de UIWebView a WKWebView en Ionic',
    description: ' Pasos para migrar de UIWebView a WKWebView...',
    datePublication: 'Sep 23, 2022',
    label1: 'iOS',
    label2: 'WKWebView',
    urlImage: 'wkwebview.jpg',
    urlBlog: 'https://medium.com/@nieltorres_/migrar-uiwebview-a-wkwebview-en-ionic-cordova-app-híbrida-f539613f452a',
    autor: 'Niel Torres',
    autorPosition: 'Co-Founder / CTO'
  },
  {
    title: 'Notifications push en Ionic con Firebase',
    description: 'Cómo implementar notificaciones push con Firebase en ionic, angular y capacitor...',
    datePublication: 'Sep 27, 2022',
    label1: 'Ionic',
    label2: 'Push Notifications',
    urlImage: 'article_1.jpg',
    urlBlog: 'https://medium.com/@nieltorres_/push-notifications-con-capacitor-y-firebase-117bec777309',
    autor: 'Niel Torres',
    autorPosition: 'Co-Founder / CTO'
  },
  {
    title: 'SOLID y los 5 principios para construir código de calidad',
    description: 'Esste post es un curso que he realizado para aprender a aplicar los 5 principios solid en tus proyectos con Ionic & Angular...',
    datePublication: 'May 25, 2023',
    label1: 'SOLID',
    label2: 'Curso',
    urlImage: 'solid.jpg',
    urlBlog: 'https://360.articulate.com/review/content/4fe9130e-b20c-4a78-9a6f-28ad118f41be/review',
    autor: 'Niel Torres',
    autorPosition: 'Co-Founder / CTO'
  },
  {
    title: 'Solucioanar error DNS_PROBE_FINISHED_NXDOMAIN',
    description: 'Error DNS_PROBE_FINISHED_NXDOMAIN en emulador de Android Después de conectaros a la VPN corporativa de un cliente (cisco,...',
    datePublication: 'Ene 18, 2024',
    label1: 'Android',
    label2: 'VPN',
    urlImage: 'error_dns.jpg',
    urlBlog: 'https://medium.com/@nieltorres_/error-dns-probe-finished-nxdomain-en-emulador-de-android-5576d0c97c54',
    autor: 'Niel Torres',
    autorPosition: 'Co-Founder / CTO'
  },
  {
    title: 'Framework Tailwind CSS en Ionic, Angular y Capacitor',
    description: 'Vamos a hacer un pequeño resumen de qué es ‘Tailwind css’, los beneficios que nos aporta y los pasos para instalarlo ¿Qué es Tailwind CSS y qué beneficios nos aporta? Tailwind CSS es un framework CSS...',
    datePublication: 'Mar 16, 2024',
    label1: 'Ionic',
    label2: 'Tailwind CSS',
    urlImage: 'tailwind.jpg',
    urlBlog: 'https://medium.com/@nieltorres_/tailwind-css-en-ionic-angular-y-capacitor-0694cf28e8ec',
    autor: 'Niel Torres',
    autorPosition: 'Co-Founder / CTO'
  }
];


import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  isMenuOpen: boolean = false;
  hidden: string = "";

  articles = article;

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
