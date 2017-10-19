import { Component } from '@angular/core';

import { BlogPage } from '../blog/blog';
import { SobrePage } from '../sobre/sobre';
import { DadosPage } from '../dados/dados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DadosPage;
  tab2Root = BlogPage;
  tab3Root = SobrePage;

  constructor() {

  }
}
