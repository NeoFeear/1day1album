import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Album } from '../models/album.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  albumsRef: AngularFirestoreCollection<Album>;
  private dbPath = '/albums';

  constructor(
    private db: AngularFirestore
  ) {
    this.albumsRef = db.collection(this.dbPath);
  }

  getAllAlbums(): any {
    return this.albumsRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({
        id: doc.payload.doc.id,
        ...doc.payload.doc.data()
      })))
    );
  }

  saveNewAlbum(album: Album): any {
    return new Observable(obs => {
      this.albumsRef.add({
        ...album
      }).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(obs => {
      this.albumsRef.doc(id).get().subscribe(res => {
        obs.next({
          id: res.id,
          ...res.data()
        });
      });
    });
  }

  update(album: Album) {
    return new Observable(obs => {
      this.albumsRef.doc(album.id).update(album);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`albums/${id}`).delete();
  }
}