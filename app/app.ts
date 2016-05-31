import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

//Pages
import {HomePage} from './pages/home/home';
import {OscilloscopePage} from './pages/oscilloscope/oscilloscope';
import {SideControlsPage} from './pages/sidecontrols/sidecontrols';
import {TestChartPage} from './pages/test-chart/test-chart';
import {TestChartCtrlsPage} from './pages/test-chart-ctrls/test-chart-ctrls';
import {TestTransportPage} from './pages/test-transport/test-transport';
import {SettingsPage} from './pages/settings/settings';

//Services
import {DeviceManagerService} from './services/device/device-manager.service';

/* ---------- Uncomment this to switch to production mode ---------
import {enableProdMode} from 'angular2/core';
enableProdMode();
-----------------------------------------------------------------*/



@App({
  templateUrl: 'build/app.html',
  config: {},
  providers: [DeviceManagerService],
  
})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    private deviceManager: DeviceManagerService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Oscilloscope', component: OscilloscopePage },
      { title: 'SideControls', component: SideControlsPage },
      { title: 'Test Chart', component: TestChartPage },
      { title: 'Test Chart Controls', component: TestChartCtrlsPage },
      { title: 'Test Transport', component: TestTransportPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
