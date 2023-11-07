import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'singers',
    loadChildren: () => import('./pages/singers/singers.module').then( m => m.SingersPageModule)
  },
  {
    path: 'recording-create',
    loadChildren: () => import('./pages/recording-create/recording-create.module').then( m => m.RecordingCreatePageModule)
  },
  {
    path: 'recording-edit/:id',
    loadChildren: () => import('./pages/recording-edit/recording-edit.module').then( m => m.RecordingEditPageModule)
  },
  {
    path: 'recording-detail/:id',
    loadChildren: () => import('./pages/recording-detail/recording-detail.module').then( m => m.RecordingDetailPageModule)
  },
  {
    path: 'recording-list',
    loadChildren: () => import('./pages/recording-list/recording-list.module').then( m => m.RecordingListPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
