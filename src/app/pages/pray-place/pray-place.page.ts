import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalScenePage } from '../../modal/modal-scene/modal-scene.page';

@Component({
  selector: 'app-pray-place',
  templateUrl: './pray-place.page.html',
  styleUrls: ['./pray-place.page.scss'],
})

export class PrayPlacePage implements OnInit {
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async launch360Video() {
    const modal = await this.modalController.create({
      component: ModalScenePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
