import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class MusicService {
  baseUrl : string = 'https://localhost:7010/api/songs'
  http = inject(HttpClient);
  songs = [
    {
      id: 1,
      name: "Eriatarka",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 2,
      name: "Inertiatic ESP",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 3,
      name: "Cicatriz ESP",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 4,
      name: "Roulette Dares (The Haunt of Death)",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 5,
      name: "Televators",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 6,
      name: "Take the Veil Cerpin Taxt",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 7,
      name: "Miranda That Ghost Just Isn't Holy Anymore",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 8,
      name: "Drunkship of Ceres",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 9,
      name: "Static and Silence",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    },
    {
      id: 10,
      name: "The Widow",
      artist: "The Mars Volta",
      album: "Deloused in the Comatorium",
      releaseDate: "June 24, 2003"
    }
  ];

  constructor() {
  }

  getAllSongs() : Observable<any>{
    let songsObs = this.http.get(this.baseUrl);
    return songsObs
  }

  addNewSong(songInfo : {}){}

  deleteSong(songId : number){  }

  editSong(songInfo : {}){}
}
