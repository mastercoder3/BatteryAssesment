import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal2Component } from 'src/app/pages/modal2/modal2.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modal: ModalController, private secondModal: ModalController) { }

  ngOnInit() {}

  close(){
    this.modal.dismiss();
  }

  openNext(){
    this.close();
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.secondModal.create({
      component: Modal2Component,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
