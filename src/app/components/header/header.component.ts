import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public showModeWeb = true;

  constructor(
    private utilService: UtilsService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    //this.checkDevice();
  }

  // checkDevice() {
  //   const logDeviceInfo = async () => {
  //     const info = ((await Device.getInfo()));
  //     console.log(info.model)
  //     if (info.model === "iPhone") {
  //       console.log("mobile")
  //       this.showModeWeb = false;
  //     }
  //   };

  //   logDeviceInfo();

  // }

  toggleDarkMode() { 
    //TODO: Pending implementation dark mode
  }

  goToBlog() {
    //TODO: Pending use with enviroments file
    const URL = "https://medium.com/@nieltorres_/list/mi-blog-e6f2e63bdc98";
    this.utilService.goToLink(URL, "_blank");
  }

  goToLink() {
    //TODO: Pending use with enviroments file
    const URL = "https://drive.google.com/file/d/1gHlFJLNi30adF28GPxE9aaJeaMx1TQiu/view?usp=sharing";
    this.utilService.goToLink(URL, "_blank");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Descargar CV?',
      buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'Si',
            handler: () => {
              console.log('Alert confirmed');
              this.goToLink();
            },
          },
        ]
    });

    await alert.present();
  }

}
