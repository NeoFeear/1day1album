import { Component } from '@angular/core';
import { AlbumService } from '../service/album.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  album!: any;

  constructor(
    private Album: AlbumService
  ) { }

  ngOnInit(): void {
    this.Album.getAllAlbums().subscribe((data: any) => {
      const today = new Date().toLocaleDateString();
      const albumToday = _.find(data, { date: today });
      this.album = albumToday;

      if (albumToday) {
        document.getElementById('info').textContent = "L'album du jour";
      } else {
        document.getElementById('info').textContent = "Aucun album n'a été défini pour aujourd'hui !";
      }
    });
  }
    
}
