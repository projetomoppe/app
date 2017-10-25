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
  selector: 'page-opcoes',
  templateUrl: 'opcoes.html',
})
export class OpcoesPage {
  public isSubscribe: boolean
  public isVibrate: boolean
  public isSound: boolean

  constructor(public alertController: AlertController, public storage: Storage) {
    //this.notify()
    //this.isToggled = true
    //this.alertar(this.isToggled);
    
    storage.get("Subscbribe").then((storageSubscribe) => {
      if (storageSubscribe != null) {
        this.isSubscribe = storageSubscribe   
      }
      else {
        this.isSubscribe = true
      }   
    });
    
    storage.get("Vibrate").then((storageVibrate) => {
      if (storageVibrate != null) {
        this.isVibrate = storageVibrate   
      }
      else {
        this.isVibrate = true
      }   
    });

    storage.get("Sound").then((storageSound) => {
      if (storageSound != null) {
        this.isSound = storageSound
      }
      else {
        this.isSound = true
      }   
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
  
  public changeSubscribe() {
    if (this.isSubscribe){
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.setSubscription(true);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        //alert(status.subscriptionStatus.subscribed);
        //alert(status.subscriptionStatus.userSubscriptionSetting);
      });
      window["plugins"].OneSignal.endInit(); 
      this.alertar("Notificações ativadas")
      this.storage.set("Subscbribe",this.isSubscribe)
    } 
    else {
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.setSubscription(false);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        //alert(status.subscriptionStatus.subscribed);
        //alert(status.subscriptionStatus.userSubscriptionSetting);
      });
      window["plugins"].OneSignal.endInit();
      this.alertar("Notificações desativadas")
      this.storage.set("Subscbribe",this.isSubscribe)
    }
  }

  public changeVibrate() {
    if (this.isVibrate){
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.enableVibrate(true);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        //alert(status.subscriptionStatus.subscribed);
        //alert(status.subscriptionStatus.userSubscriptionSetting);
      });
      window["plugins"].OneSignal.endInit(); 
      this.alertar("Vibrar ativado")
      this.storage.set("Vibrate",this.isVibrate)
    } 
    else {
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.enableVibrate(true);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        //alert(status.subscriptionStatus.subscribed);
        //alert(status.subscriptionStatus.userSubscriptionSetting);
      });
      window["plugins"].OneSignal.endInit();
      this.alertar("Vibrar desativado")
      this.storage.set("Vibrate",this.isVibrate)
    }
  }

  public changeSound() {
    if (this.isSound){
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.enableSound(true);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        //alert(status.subscriptionStatus.subscribed);
        //alert(status.subscriptionStatus.userSubscriptionSetting);
      });
      window["plugins"].OneSignal.endInit(); 
      this.alertar("Notificações sonoras ativadas")
      this.storage.set("Sound",this.isSound)
    } 
    else {
      window["plugins"].OneSignal.startInit("42023282-35cc-4192-a4aa-5956dd9e3602", "629827327061")
      window["plugins"].OneSignal.enableSound(false);
      window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
        //alert(status.subscriptionStatus.subscribed);
        //alert(status.subscriptionStatus.userSubscriptionSetting);
      });
      window["plugins"].OneSignal.endInit();
      this.alertar("Notificações sonoras desativadas")
      this.storage.set("Sound",this.isSound)
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
