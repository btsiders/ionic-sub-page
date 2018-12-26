import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'thing1',
        pathMatch: 'full'
    },
    {
        path: 'thing1',
        loadChildren: './home/home.module#Thing1PageModule'
    },
    {
        path: 'thing2',
        loadChildren: './list/list.module#Thing2PageModule'
    },

    // sub-pages only available as sub-pages
    //   { path: 'sub-page1', loadChildren: './sub/sub-page1/sub-page1.module#SubPage1PageModule' },
    //   { path: 'sub-page2', loadChildren: './sub/sub-page2/sub-page2.module#SubPage2PageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
