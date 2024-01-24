import { Component, NgZone, } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private zone: NgZone
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupDeepLink();
    })
  }

  setupDeepLink() {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      console.log('deeplink event: ', event)
      this.zone.run(() => {
        // handel deeplink response
      });
    });
  }



}
