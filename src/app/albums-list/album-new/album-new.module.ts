import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumNewPageRoutingModule } from './album-new-routing.module';

import { AlbumNewPage } from './album-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumNewPageRoutingModule
  ],
  declarations: [AlbumNewPage]
})
export class AlbumNewPageModule {}
