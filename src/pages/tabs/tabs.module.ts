import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { HuntPageModule } from '../hunt/hunt.module';
import { ShinyPageModule } from '../shiny/shiny.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    HuntPageModule,
    ShinyPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
