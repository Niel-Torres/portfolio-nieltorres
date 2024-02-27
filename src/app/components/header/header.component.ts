import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  showModeWeb = true;

  constructor(
  ) { }

  ngOnInit() {
    this.checkDevice();
    
  }

  checkDevice() {
    const logDeviceInfo = async () => {
      const info = ((await Device.getInfo()));

      console.log(info.model)
      
      if(info.model === "iPhone"){
        console.log("mobile")
        this.showModeWeb = false;
      }
    };

    logDeviceInfo();
  
  }

  toggleDarkMode() {}

}
