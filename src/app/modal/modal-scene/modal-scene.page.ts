import { ViewChild, Component } from '@angular/core';
import { ScenegraphComponent } from '../../../components/scenegraph/scenegraph.component'

@Component({
  selector: 'modal-scene',
  templateUrl: './modal-scene.page.html',
  styleUrls: ['./modal-scene.page.scss'],
})

export class ModalScenePage {
    
  @ViewChild('scenegraph')
  scenegraph: ScenegraphComponent;

  constructor() { }

  ionViewDidEnter() {
    this.scenegraph.startAnimation();
  }

  ionViewDidLeave() {
    this.scenegraph.stopAnimation();
  }

  toggleVR(){
    this.scenegraph.toggleVR();
  }
}
