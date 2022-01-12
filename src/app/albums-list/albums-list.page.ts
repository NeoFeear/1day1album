import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../service/album.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.page.html',
  styleUrls: ['./albums-list.page.scss'],
})
export class AlbumsListPage implements OnInit {
  albums!: any;

  constructor(
    private Album: AlbumService
  ) { }

  ngOnInit(): void {
    this.Album.getAllAlbums().subscribe((data: any) => {
      this.albums = _.orderBy(data, 'date', 'desc');

      const today = new Date().toLocaleDateString();
      const albumToday = _.find(data, { date: today });
      if (albumToday) {
        document.getElementById('btnCreate').style.display = 'none';
      }
    });
    
  }
}
