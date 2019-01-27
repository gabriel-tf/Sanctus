import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'saint',
        children: [
          {
            path: '',
            loadChildren: '../saint/saint.module#SaintPageModule'
          }
        ]
      },
      {
        path: 'pray-place',
        children: [
          {
            path: '',
            loadChildren: '../pray-place/pray-place.module#PrayPlacePageModule'
          }
        ]
      },
      {
        path: 'poor',
        children: [
          {
            path: '',
            loadChildren: '../poor/poor.module#PoorPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/saint',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/saint',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
