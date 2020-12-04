import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HuntPage } from '../hunt/hunt.page';
import { ShinyPage } from '../shiny/shiny.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabsPage,
    children: [
      {
        path: 'hunt',
        component: HuntPage,
      },
      {
        path: 'shiny',
        component: ShinyPage,
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tab/hunt',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
