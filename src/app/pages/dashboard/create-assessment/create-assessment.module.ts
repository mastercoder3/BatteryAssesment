import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateAssessmentPage } from './create-assessment.page';
import { ModalComponent } from '../../modal/modal.component';
import { Modal2Component } from 'src/app/pages/modal2/modal2.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAssessmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateAssessmentPage, ModalComponent, Modal2Component],
  entryComponents: [ModalComponent, Modal2Component]
})
export class CreateAssessmentPageModule {}
