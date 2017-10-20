import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//import { OneSignal } from '@ionic-native/onesignal';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertController: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
  
      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      var notificationOpenedCallback = function(jsonData) {
        //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        //alert(jsonData.notification.payload.body);
        //this.alertar(jsonData.notification.payload.body)
        const alert = this.alertController.create({
          title: 'Moppe',
          subTitle: jsonData.notification.payload.body,
          buttons: ['OK']
        });
        alert.present();
      }

      window["plugins"].OneSignal
      .startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
      //.handleNotificationReceived(notificationOpenedCallback)
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
    });
  }

  public alertar(msg){
    const alert = this.alertController.create({
      title: 'Moppe',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
