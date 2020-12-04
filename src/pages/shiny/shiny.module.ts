import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShinyPageRoutingModule } from './shiny-routing.module';

import { ShinyPage } from './shiny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShinyPageRoutingModule
  ],
  declarations: [ShinyPage]
})
export class ShinyPageModule {}
