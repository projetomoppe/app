import { Component } from '@angular/core';

import { BlogPage } from '../blog/blog';
import { SobrePage } from '../sobre/sobre';
import { DadosPage } from '../dados/dados';
import { ConfigPage } from '../config/config'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DadosPage;
  tab2Root = ConfigPage;
  tab3Root = BlogPage;
  tab4Root = SobrePage;

  constructor() {

  }
}
