import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuntDetailPageRoutingModule } from './hunt-detail-routing.module';
import { SwipeModule } from 'src/app/swipe/swipe.module';

import { HuntDetailPage } from './hunt-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuntDetailPageRoutingModule,
    SwipeModule
  ],
  declarations: [HuntDetailPage]
})
export class HuntDetailPageModule {}
