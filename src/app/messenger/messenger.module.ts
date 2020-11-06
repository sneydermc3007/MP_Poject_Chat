import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MessengerPageRoutingModule } from './messenger-routing.module';

import { MessengerPage } from './messenger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessengerPageRoutingModule,RouterModule.forChild([
      {
        path: '',
        component: MessengerPage
      }
    ])
  ],
  declarations: [MessengerPage]
})
export class MessengerPageModule {}
