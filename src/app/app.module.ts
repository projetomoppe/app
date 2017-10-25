import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { HistoricoPage } from '../pages/historico/historico';
import { D1Page } from '../pages/d1/d1';
import { D2Page } from '../pages/d2/d2';
import { OpcoesPage } from '../pages/opcoes/opcoes';
import { SitePage } from '../pages/site/site';
import { BlogPage} from '../pages/blog/blog';
import { DadosPage} from '../pages/dados/dados';
import { SobrePage} from '../pages/sobre/sobre';
import { EstadoPage } from '../pages/estado/estado';

import { IonicStorageModule } from '@ionic/storage';
//import { Storage } from '@ionic/storage';

import { SuperTabsModule } from 'ionic2-super-tabs';

//import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
    BlogPage,
    DadosPage,
    SobrePage,
    TabsPage,
    HistoricoPage,
    D1Page,
    D2Page,
    OpcoesPage,
    SitePage,
    EstadoPage,
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BlogPage,
    DadosPage,
    SobrePage,
    TabsPage,
    HistoricoPage,
    D1Page,
    D2Page,
    OpcoesPage,
    SitePage,
    EstadoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
