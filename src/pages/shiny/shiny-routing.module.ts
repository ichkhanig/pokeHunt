import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShinyPage } from './shiny.page';

const routes: Routes = [
  {
    path: '',
    component: ShinyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShinyPageRoutingModule {}
