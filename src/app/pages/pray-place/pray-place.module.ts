import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrayPlacePage } from './pray-place.page';
import { ModalScenePage } from '../../modal/modal-scene/modal-scene.page';

import { ComponentsModule } from '../../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PrayPlacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [PrayPlacePage, ModalScenePage],
  entryComponents: [ModalScenePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrayPlacePageModule {}
