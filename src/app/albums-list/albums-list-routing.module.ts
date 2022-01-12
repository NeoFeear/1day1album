import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListPage } from './albums-list.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumsListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./album-new/album-new.module').then( m => m.AlbumNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsListPageRoutingModule {}
