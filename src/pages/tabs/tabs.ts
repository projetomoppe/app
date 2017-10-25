import { Component } from '@angular/core';

import { BlogPage } from '../blog/blog';
import { SobrePage } from '../sobre/sobre';
import { DadosPage } from '../dados/dados';
import { OpcoesPage } from '../opcoes/opcoes';

import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = DadosPage;
  tab2Root: any = OpcoesPage;
  tab3Root: any = BlogPage;
  tab4Root: any = SobrePage;

  constructor(public superTabsCtrl: SuperTabsController) { }

}
