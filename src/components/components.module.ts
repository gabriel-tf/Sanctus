import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ScenegraphComponent } from './scenegraph/scenegraph.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    ScenegraphComponent
  ],
  exports: [
    ScenegraphComponent
  ],
  entryComponents: [],
})
export class ComponentsModule { }
