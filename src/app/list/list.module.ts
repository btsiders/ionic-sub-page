import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Thing2Page } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Thing2Page,
        children: [
            { path: '', redirectTo: 'sub-page1', pathMatch: 'full' },
            { path: 'sub-page1', loadChildren: './../sub/sub-page1/sub-page1.module#SubPage1PageModule' },
            { path: 'sub-page2', loadChildren: './../sub/sub-page2/sub-page2.module#SubPage2PageModule' }
        ]
      }
    ])
  ],
  declarations: [Thing2Page]
})
export class Thing2PageModule {}
