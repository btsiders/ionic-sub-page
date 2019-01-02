import { Component, ViewChild } from '@angular/core';
import { NavController, IonSegment } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class Thing2Page {

    @ViewChild(IonSegment) ionSegment: IonSegment;

    title = 'Page 2';
    selected: string = null;

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
        this.navCtrl.navigateForward([`/thing2/${subPage}`], { replaceUrl: true });
    }

}
