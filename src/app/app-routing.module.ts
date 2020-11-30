import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'menu', loadChildren: () => import('../pages/menu/menu.module').then( m => m.MenuPageModule) },
  { path: 'new', loadChildren: () => import('../pages/new/new.module').then( m => m.NewPageModule) },
  { path: 'new/:name', loadChildren: () => import('../pages/new/new-detail/new-detail.module').then( m => m.NewDetailPageModule) },
  { path: 'hunt', loadChildren: () => import('../pages/hunt/hunt.module').then( m => m.HuntPageModule) },
  { path: 'hunt/:id', loadChildren: () => import('../pages/hunt/hunt-detail/hunt-detail.module').then( m => m.HuntDetailPageModule) },
  { path: 'tabs', loadChildren: () => import('../pages/tabs/tabs.module').then( m => m.TabsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
