import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HistoricoPage } from '../historico/historico';
import { D1Page } from '../d1/d1';
import { D2Page } from '../d2/d2';
//import { ConfigPage } from '../config/config';


@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html'
})
export class DadosPage {
  historicoPage = HistoricoPage;
  d1Page = D1Page;
  d2Page = D2Page;
  //configPage = ConfigPage;

  constructor(public navCtrl: NavController) {

  }


}

