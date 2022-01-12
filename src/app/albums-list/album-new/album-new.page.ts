import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Album } from 'src/app/models/album.model';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-album-new',
  templateUrl: './album-new.page.html',
  styleUrls: ['./album-new.page.scss'],
})
export class AlbumNewPage implements OnInit {
  public album!: Album;

  constructor(
    private Album: AlbumService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.album = new Album();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Album enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/albums']);
      }, 2000);
    });
  }

  add() {
    this.Album.saveNewAlbum(this.album).subscribe(() => {
      this.album = new Album();   
      this.presentToast();
    })
  }

}