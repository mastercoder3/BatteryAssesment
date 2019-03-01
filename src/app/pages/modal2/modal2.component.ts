import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
})
export class Modal2Component implements OnInit {

  constructor(private modal: ModalController, private secondModal: ModalController) { }

  ngOnInit() {}

  close(){
    this.modal.dismiss();
  }

  back(){
    this.close();
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.secondModal.create({
      component: ModalComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
