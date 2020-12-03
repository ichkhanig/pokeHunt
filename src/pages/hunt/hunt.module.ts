import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuntPageRoutingModule } from './hunt-routing.module';
import { SwipeModule } from 'src/app/swipe/swipe.module';

import { HuntPage } from './hunt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuntPageRoutingModule,
    SwipeModule
  ],
  declarations: [HuntPage]
})
export class HuntPageModule {}
