import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SitePage } from '../site/site';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {
  sitePage = SitePage
  
  constructor(public navCtrl: NavController) {

  }

}
