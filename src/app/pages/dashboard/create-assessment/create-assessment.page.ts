import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../modal/modal.component';
import { Modal2Component } from '../../modal2/modal2.component';

@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.page.html',
  styleUrls: ['./create-assessment.page.scss'],
})
export class CreateAssessmentPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: Modal2Component,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
