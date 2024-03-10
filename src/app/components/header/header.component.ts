import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { UtilsService } from 'src/app/services/utils/utils.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  showModeWeb = true;

  constructor(
    private utilService: UtilsService
  ) { }

  ngOnInit() {
    this.checkDevice();

  }

  checkDevice() {
    const logDeviceInfo = async () => {
      const info = ((await Device.getInfo()));

      console.log(info.model)

      if (info.model === "iPhone") {
        console.log("mobile")
        this.showModeWeb = false;
      }
    };

    logDeviceInfo();

  }

  toggleDarkMode() { }

  goToBlog() {
    const URL = "https://medium.com/@nieltorres_/list/mi-blog-e6f2e63bdc98";
    this.utilService.goToLink(URL, "_blank");
  }

  goToLink() {
    const URL = "https://drive.google.com/file/d/19vLHBEe3bmJ090fh-VjIBlSTMhnblBiG/view?usp=sharing";
    this.utilService.goToLink(URL, "_blank");
  }

}
