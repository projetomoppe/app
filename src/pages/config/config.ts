import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';


/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  public isToggled: boolean

  constructor(public alertController: AlertController, public storage: Storage) {
    //this.notify()
    //this.isToggled = true
    
    storage.get("Toggled").then((Toggled) => {
      this.isToggled = Toggled      
    });
    this.alertar(this.isToggled);
    
  }

  public alertar(msg){
    const alert = this.alertController.create({
      title: 'Moppe',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  
  public notify() {
    if (this.isToggled){
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.setSubscription(true);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        alert(status.subscriptionStatus.subscribed);
      });
      window["plugins"].OneSignal.endInit(); 
      //this.alertar("Notificações ativadas")
      this.storage.set("Toggled",this.isToggled)
    } 
    else {
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.setSubscription(false);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        alert(status.subscriptionStatus.subscribed);
      });
      window["plugins"].OneSignal.endInit();
      //this.alertar("Notificações desativadas")
      this.storage.set("Toggled",this.isToggled)
    }
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
