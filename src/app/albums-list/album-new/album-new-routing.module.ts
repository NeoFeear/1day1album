import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumNewPage } from './album-new.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumNewPageRoutingModule {}
