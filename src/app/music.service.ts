import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  http : HttpClient = inject(HttpClient);

  constructor() { }

  getAllSongs(){}

  addNewSong(songInfo : {}){}

  deleteSong(songId : number){  }

  editSong(songInfo : {}){}
}
