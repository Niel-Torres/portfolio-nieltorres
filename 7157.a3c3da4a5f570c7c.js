"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7157],{7157:(l,p,i)=>{i.d(p,{v:()=>d});var e=i(9212),a=i(451);let d=(()=>{var r;class c{constructor(){this.mostrar=!1,this.showHybridProjects=!0,this.showWebProjects=!0,this.showAndroidProjects=!0,this.showiOSProjects=!0,this.selectedPlatform="All"}ngOnInit(){}mostrarTexto(){this.mostrar=!0}ocultarTexto(){this.mostrar=!1}showProjects(o){switch(this.selectedPlatform=o,o){case"Android":console.log("Android"),this.showWebProjects=!1,this.showHybridProjects=!0,this.showAndroidProjects=!0,this.showiOSProjects=!1;break;case"iOS":console.log("iOS"),this.showWebProjects=!1,this.showHybridProjects=!0,this.showAndroidProjects=!1,this.showiOSProjects=!0;break;case"Web":console.log("Web"),this.showWebProjects=!0,this.showHybridProjects=!0,this.showAndroidProjects=!1,this.showiOSProjects=!1;break;default:console.log("All"),this.showWebProjects=!0,this.showHybridProjects=!0,this.showAndroidProjects=!0,this.showiOSProjects=!0}}}return(r=c).\u0275fac=function(o){return new(o||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-projects"]],inputs:{marginTop:"marginTop"},decls:172,vars:35,consts:[["id","projects",1,"section-projects"],[1,"description"],[1,"projects-filter","text-center"],["href","javascript:void(0);",3,"click"],[1,"container-projects"],[1,"projects"],[3,"hidden","mouseenter","mouseleave"],["src","assets/images/projects/myhey.jpg"],[3,"hidden"],[1,"card-content-project"],[1,"card-content-project-title"],[1,"card-content-project-subtitle"],["src","assets/images/projects/boda1-gracedu-2.jpg"],["src","assets/images/projects/miorangeapp.jpg"],["src","assets/images/projects/agendaunicaweb.jpg"],["src","assets/images/projects/jazztelapp-1.jpg"],["src","assets/images/projects/okn-project-1.jpeg"],["src","assets/images/projects/dispelweb.png"],["src","assets/images/projects/pokemon.jpg"],["src","assets/images/projects/nieltorresweb.jpg"],["src","assets/images/projects/calidadelaire.png"],["src","assets/images/projects/carpeta_ciudadana.png"],["src","assets/images/projects/caminame.png"]],template:function(o,t){1&o&&(e.TgZ(0,"section",0)(1,"div")(2,"div")(3,"h2"),e._uU(4,"Proyectos"),e.qZA()(),e.TgZ(5,"div",1)(6,"h5"),e._uU(7,"Estos son algunos de los proyectos en los que he participado a lo largo de mi trayectoria profesional. He tenido la oportunidad de trabajar en diversas iniciativas que van desde proyectos corporativos, hasta emprendimientos personales, lo cual refleja mi inter\xe9s y pasi\xf3n por el desarrollo del software, incluso fuera del \xe1mbito laboral. "),e.qZA()(),e.TgZ(8,"div",2)(9,"ul")(10,"li")(11,"a",3),e.NdJ("click",function(){return t.showProjects("All")}),e._uU(12,"ALL"),e.qZA()(),e.TgZ(13,"li")(14,"a",3),e.NdJ("click",function(){return t.showProjects("Android")}),e._uU(15,"Android"),e.qZA()(),e.TgZ(16,"li")(17,"a",3),e.NdJ("click",function(){return t.showProjects("iOS")}),e._uU(18,"iOS"),e.qZA()(),e.TgZ(19,"li")(20,"a",3),e.NdJ("click",function(){return t.showProjects("Web")}),e._uU(21,"Web"),e.qZA()()()()(),e.TgZ(22,"div",4)(23,"div",5)(24,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(25,"ion-img",7),e.TgZ(26,"ion-card-content",8)(27,"div",9)(28,"p",10),e._uU(29,"App | MyHey"),e.qZA(),e.TgZ(30,"p",11),e._uU(31,"Ionic | Angular | Capacitor"),e.qZA(),e._UZ(32,"br"),e.TgZ(33,"p",11),e._uU(34,"App h\xedbrida construida para el grupo Orange B\xe9lgica"),e.qZA(),e.TgZ(35,"p",11),e._uU(36,"He formado parte del equipo de arquitectura para la construcci\xf3n de una app area cliente de telefon\xeda m\xf3vil en B\xe9lgica"),e.qZA()()()(),e.TgZ(37,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(38,"ion-img",12),e.TgZ(39,"ion-card-content",8)(40,"div",9)(41,"p",10),e._uU(42,"Web | Invitaci\xf3n de Boda"),e.qZA(),e.TgZ(43,"p",11),e._uU(44,"Ionic | Angular | Cordova"),e.qZA(),e._UZ(45,"br"),e.TgZ(46,"p",11),e._uU(47,"He construido esta web, la cual es una invitaci\xf3n de boda digital"),e.qZA()()()(),e.TgZ(48,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(49,"ion-img",13),e.TgZ(50,"ion-card-content",8)(51,"div",9)(52,"p",10),e._uU(53,"App | MiOrange"),e.qZA(),e.TgZ(54,"p",11),e._uU(55,"Ionic | Angular | Cordova"),e.qZA(),e._UZ(56,"br"),e.TgZ(57,"p",11),e._uU(58,"App h\xedbrida del grupo Orange Espa\xf1a"),e.qZA(),e.TgZ(59,"p",11),e._uU(60,"He lidearado el mantenimiento y evoluci\xf3n de la app area cliente MiOrange"),e.qZA()()()(),e.TgZ(61,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(62,"ion-img",14),e.TgZ(63,"ion-card-content",8)(64,"div",9)(65,"p",10),e._uU(66,"Web | Portales orange"),e.qZA(),e.TgZ(67,"p",11),e._uU(68,"PHP | SQL | Apache"),e.qZA(),e._UZ(69,"br"),e.TgZ(70,"p",11),e._uU(71,"He lidearado el mantenimiento y evoluci\xf3n de las plataformas web internas del grupo Orange"),e.qZA()()()(),e.TgZ(72,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(73,"ion-img",15),e.TgZ(74,"ion-card-content",8)(75,"div",9)(76,"p",10),e._uU(77,"App | MiJazztel"),e.qZA(),e.TgZ(78,"p",11),e._uU(79,"Ionic | Angular | Capacitor"),e.qZA(),e._UZ(80,"br"),e.TgZ(81,"p",11),e._uU(82,"App h\xedbrida del grupo Orange Espa\xf1a"),e.qZA(),e.TgZ(83,"p",11),e._uU(84,"He lidearado el mantenimiento y evoluci\xf3n de la app area cliente MiJazztel del grupo Orange"),e.qZA()()()(),e.TgZ(85,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(86,"ion-img",16),e.TgZ(87,"ion-card-content",8)(88,"div",9)(89,"p",10),e._uU(90,"Web | Plataforma e-learning"),e.qZA(),e.TgZ(91,"p",11),e._uU(92,"PHP"),e.qZA(),e._UZ(93,"br"),e.TgZ(94,"p",11),e._uU(95,"He participado en el mantenimiento y evoluci\xf3n de esta aplicacion web de tipo e-learning, la cual fue construida con php vanilla"),e.qZA()()()(),e.TgZ(96,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(97,"ion-img",17),e.TgZ(98,"ion-card-content",8)(99,"div",9)(100,"p",10),e._uU(101,"Web | Dispel publicidad"),e.qZA(),e.TgZ(102,"p",11),e._uU(103,"Wordpress"),e.qZA(),e._UZ(104,"br"),e.TgZ(105,"p",11),e._uU(106,"He liderado la contrucci\xf3n de esta aplicaci\xf3n web para una empresa de publicidad"),e.qZA()()()(),e.TgZ(107,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(108,"ion-img",18),e.TgZ(109,"ion-card-content",8)(110,"div",9)(111,"p",10),e._uU(112,"Web | Pokem\xf3n GO "),e.qZA(),e.TgZ(113,"p",11),e._uU(114,"Angular JS"),e.qZA(),e.TgZ(115,"p",11),e._uU(116,"Proyecto personal"),e.qZA(),e._UZ(117,"br"),e.TgZ(118,"p",11),e._uU(119,"Aplicaci\xf3n web que simula una pokedex"),e.qZA()()()(),e.TgZ(120,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(121,"ion-img",19),e.TgZ(122,"ion-card-content",8)(123,"div",9)(124,"p",10),e._uU(125,"Web | Portafolio web"),e.qZA(),e.TgZ(126,"p",11),e._uU(127,"Ionic | Angular | Capacitor"),e.qZA(),e.TgZ(128,"p",11),e._uU(129,"Proyecto personal"),e.qZA(),e._UZ(130,"br"),e.TgZ(131,"p",11),e._uU(132,"Aplicaci\xf3n h\xedbrida construida para la web nieltorres.com"),e.qZA()()()(),e.TgZ(133,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(134,"ion-img",20),e.TgZ(135,"ion-card-content",8)(136,"div",9)(137,"p",10),e._uU(138,"App | Calidad del Aire"),e.qZA(),e.TgZ(139,"p",11),e._uU(140,"Ionic | Angular | Capacitor"),e.qZA(),e._UZ(141,"br"),e.TgZ(142,"p",11),e._uU(143,"Aplicaci\xf3n h\xedbrida construida para la Junta de Andaluc\xeda"),e.qZA(),e.TgZ(144,"p",11),e._uU(145,"He liderado la contrucci\xf3n de esta APP, la cual nos brinda informaci\xf3n de la calidad del aire en diferentes zonas de Andaluc\xeda, adem\xe1s te env\xeda notificaciones en tiempo real"),e.qZA()()()(),e.TgZ(146,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(147,"ion-img",21),e.TgZ(148,"ion-card-content",8)(149,"div",9)(150,"p",10),e._uU(151,"App | Carpeta Ciudadana"),e.qZA(),e.TgZ(152,"p",11),e._uU(153,"kotlin | Swift UI"),e.qZA(),e._UZ(154,"br"),e.TgZ(155,"p",11),e._uU(156,"Aplicaci\xf3n nativa construida para la Junta de Andaluc\xeda"),e.qZA(),e.TgZ(157,"p",11),e._uU(158,"He participado en la contrucci\xf3n de esta APP, la cual nos da un acceso sencillo y r\xe1pido a diferentes tipos de informaci\xf3n relacionado con los tr\xe1mites de la Administraci\xf3n de la Junta de Andaluc\xeda"),e.qZA()()()(),e.TgZ(159,"ion-card",6),e.NdJ("mouseenter",function(){return t.mostrarTexto()})("mouseleave",function(){return t.ocultarTexto()}),e._UZ(160,"ion-img",22),e.TgZ(161,"ion-card-content",8)(162,"div",9)(163,"p",10),e._uU(164,"App | Cam\xedname"),e.qZA(),e.TgZ(165,"p",11),e._uU(166,"Ionic | Angular | Capacitor"),e.qZA(),e._UZ(167,"br"),e.TgZ(168,"p",11),e._uU(169,"Aplicaci\xf3n h\xedbrida construida para la Junta de Andaluc\xeda"),e.qZA(),e.TgZ(170,"p",11),e._uU(171,"He liderado la contrucci\xf3n de esta APP, la cual nos brinda un listado de rutas de Andaluc\xeda, desde las cuales podemos hacer el recorrido en tiempo real"),e.qZA()()()()()()()),2&o&&(e.xp6(),e.Gre("projects-title ",t.marginTop,""),e.xp6(9),e.ekj("active","All"===t.selectedPlatform),e.xp6(3),e.ekj("active","Android"===t.selectedPlatform),e.xp6(3),e.ekj("active","iOS"===t.selectedPlatform),e.xp6(3),e.ekj("active","Web"===t.selectedPlatform),e.xp6(5),e.Q6J("hidden",!t.showHybridProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(11),e.Q6J("hidden",!t.showHybridProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(9),e.Q6J("hidden",!t.showHybridProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(11),e.Q6J("hidden",!t.showWebProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(9),e.Q6J("hidden",!t.showHybridProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(11),e.Q6J("hidden",!t.showWebProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(9),e.Q6J("hidden",!t.showWebProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(9),e.Q6J("hidden",!t.showWebProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(11),e.Q6J("hidden",!t.showWebProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(11),e.Q6J("hidden",!t.showHybridProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(11),e.Q6J("hidden",!t.showHybridProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar),e.xp6(11),e.Q6J("hidden",!t.showAndroidProjects),e.xp6(2),e.Q6J("hidden",!t.mostrar))},dependencies:[a.PM,a.FN,a.Xz],styles:['.section-projects[_ngcontent-%COMP%]{background:radial-gradient(#493845,#000);padding:10px;border-style:solid;border-width:1px 0px 1px 0px;border-color:#3a3a3a}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;align-content:center;justify-content:center;align-items:center}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-weight:600;font-size:2rem;color:#fff;text-transform:capitalize}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{max-width:900px;margin:0 8%}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-weight:400;color:#ffffe0;margin-bottom:3%;text-align:justify}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]   .projects-filter[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]{text-align:center!important}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]   .projects-filter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fffffd;display:inline-block;margin:10px}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]   .projects-filter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:2px;font-size:11px;font-weight:600;border-bottom:1px solid transparent}.section-projects[_ngcontent-%COMP%]   .projects-title[_ngcontent-%COMP%]   .projects-filter[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{cursor:default;border-bottom:1px solid #fffffd;color:#fffffd}.section-projects[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:center;justify-content:center;align-items:center;margin-bottom:50px}.section-projects[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;justify-content:center;align-items:center;max-width:1000px}.section-projects[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:300px;height:300px}ion-card[_ngcontent-%COMP%]{position:relative;margin:5px;border-radius:50px;cursor:crosshair}ion-img[_ngcontent-%COMP%]{width:100%;height:auto;transition:opacity .5s ease}ion-card[_ngcontent-%COMP%]:hover{--background: black}ion-card[_ngcontent-%COMP%]:hover   ion-img[_ngcontent-%COMP%]{background-color:#000;opacity:.15}ion-card-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;transition:opacity .5s ease}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f5f5f5}ion-card[_ngcontent-%COMP%]:hover   ion-card-content[_ngcontent-%COMP%]{opacity:1;width:100%}.card-content-project[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:nowrap}.card-content-project[_ngcontent-%COMP%]   .card-content-project-title[_ngcontent-%COMP%]{font-size:20px;color:#fff;text-shadow:#fffffd 1px 0 10px}.card-content-project[_ngcontent-%COMP%]   .card-content-project-subtitle[_ngcontent-%COMP%]{font-size:14px;color:#fff;text-shadow:#fffffd 1px 0 10px;display:block}@media screen and (max-width: 820px){.section-projects[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:180px;height:180px}.card-content-project[_ngcontent-%COMP%]   .card-content-project-title[_ngcontent-%COMP%]{font-size:12px;text-align:center}.card-content-project[_ngcontent-%COMP%]   .card-content-project-subtitle[_ngcontent-%COMP%]{font-size:8px;text-align:center}}@media screen and (max-width: 768px){.section-projects[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:150px;height:150px}}@media screen and (max-width: 430px){.section-projects[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:110px;height:110px}ion-card[_ngcontent-%COMP%]{border-radius:20px}.card-content-project[_ngcontent-%COMP%]   .card-content-project-subtitle[_ngcontent-%COMP%]{display:none}.card-content-md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}}@media screen and (max-width: 285px){.section-projects[_ngcontent-%COMP%]   .container-projects[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:240px}}']}),c})()}}]);