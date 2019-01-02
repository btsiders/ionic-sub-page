import { Component, ViewChild } from '@angular/core';
import { IonSegment, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class Thing1Page {

    @ViewChild(IonSegment) ionSegment: IonSegment;

    title = 'Page 1';

    constructor(
        private navCtrl: NavController,
        private router: Router,
    ) { }

    ionViewDidEnter() {
        this.setSelectedTab();
    }

    // set the current tab based on the subUrl
    private setSelectedTab() {
        const subUrl = this.router.url.split('/');
        this.ionSegment.value = subUrl[subUrl.length - 1];
        console.log('tab set to', this.ionSegment.value);
    }

    public updateSubPage(subPage: string) {
        console.log('updateSubPage', subPage);
        this.navCtrl.navigateForward([`/thing1/${subPage}`], { replaceUrl: true });
    }

}
